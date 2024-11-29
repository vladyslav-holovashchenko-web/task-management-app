import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

export interface AuthState {
  isLoading: boolean
  error: string | null
  isAuthenticated: boolean
  user: { email: string; id: string } | null
  token: string | null
}

const initialState: AuthState = {
  isLoading: false,
  error: null,
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem('access_token') || null,
}

const isTokenValid = (token: string | null): boolean => {
  if (!token) return false
  try {
    const { exp } = jwtDecode<{ exp: number }>(token)
    return exp * 1000 > Date.now()
  } catch {
    return false
  }
}

export const refreshToken = createAsyncThunk('auth/refreshToken', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:3000/auth/refresh', {}, { withCredentials: true })
    const decodedToken = jwtDecode<{ email: string; sub: string }>(response.data.access_token)
    localStorage.setItem('access_token', response.data.access_token)
    return {
      access_token: response.data.access_token,
      user: { email: decodedToken.email, id: decodedToken.sub },
    }
  } catch (err: any) {
    return rejectWithValue('Failed to refresh token')
  }
})

export const initializeAuth = createAsyncThunk('auth/initializeAuth', async (_, { dispatch }) => {
  const token = localStorage.getItem('access_token')
  if (isTokenValid(token)) {
    const decodedToken = jwtDecode<{ email: string; sub: string }>(token!)
    return { token, user: { email: decodedToken.email, id: decodedToken.sub } }
  } else {
    await dispatch(refreshToken())
    return null
  }
})

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { email, password })
      const decodedToken = jwtDecode<{ email: string; sub: string }>(response.data.access_token)
      localStorage.setItem('access_token', response.data.access_token)
      return {
        access_token: response.data.access_token,
        user: { email: decodedToken.email, id: decodedToken.sub },
      }
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Login failed')
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError(state) {
      state.error = null
    },
    logout(state) {
      state.isAuthenticated = false
      state.user = null
      state.token = null
      localStorage.removeItem('access_token')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isAuthenticated = true
        state.user = action.payload.user
        state.token = action.payload.access_token
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.user = action.payload.user
        state.token = action.payload.access_token
      })
      .addCase(refreshToken.rejected, (state) => {
        state.isAuthenticated = false
        state.user = null
        state.token = null
      })
      .addCase(initializeAuth.fulfilled, (state, action) => {
        if (action.payload) {
          state.isAuthenticated = true
          state.user = action.payload.user
          state.token = action.payload.token
        }
      })
  },
})

export const { resetError, logout } = authSlice.actions
export default authSlice.reducer
