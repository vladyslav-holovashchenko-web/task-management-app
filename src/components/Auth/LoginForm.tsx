import { FC, useState } from 'react'
import { Box, TextField, Button, Typography, Link as MuiLink, Grid2 as Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/useStoreHooks'
import { loginUser } from '../../features/auth/authSlice'

const LoginForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()
  const { isLoading, error } = useAppSelector((state) => state.auth)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const resultAction = await dispatch(loginUser({ email, password })).unwrap()
      console.log('Login successful:', resultAction)
      navigate('/dashboard')
    } catch (err) {
      console.error('Login failed:', err)
    }
  }

  return (
    <Box
      sx={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '2rem',
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }} align="center">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          {error && (
            <Grid size={{ xs: 12 }}>
              <Typography color="error" variant="body2" align="center">
                {error}
              </Typography>
            </Grid>
          )}
          <Grid size={{ xs: 12 }}>
            <Button fullWidth type="submit" variant="contained" color="primary" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="body2">
          Don&apos;t have an account?{' '}
          <MuiLink component={Link} to="/register" color="primary">
            Register here
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  )
}

export default LoginForm
