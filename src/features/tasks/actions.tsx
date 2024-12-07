import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiUrl = 'http://localhost:3000'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${apiUrl}/tasks`)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to load tasks')
  }
})

export const fetchTeams = createAsyncThunk('teams/fetchTeams', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${apiUrl}/teams`)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to load teams')
  }
})

export const fetchTaskBoards = createAsyncThunk('taskBoards/fetchTaskBoards', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${apiUrl}/taskBoards`)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to load task boards')
  }
})
