import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { fetchTasks, fetchTeams, fetchTaskBoards } from './actions'
import { ITask, ITaskBoard, ITeam } from '../../interfaces'

interface TasksState {
  tasks: ITask[]
  taskBoards: ITaskBoard[]
  teams: ITeam[]
  loading: boolean
  error: string | null
}

const initialState: TasksState = {
  tasks: [],
  taskBoards: [],
  teams: [],
  loading: false,
  error: null,
}

const handlePending = (state: TasksState) => {
  state.loading = true
  state.error = null
}

const handleRejected = (state: TasksState, action: PayloadAction<unknown, string, any, SerializedError>) => {
  state.loading = false
  state.error = action.payload ? String(action.payload) : action.error?.message || 'An unexpected error occurred'
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload)
    },

    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },

    updateTaskTitle: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id)
      if (task) {
        task.title = action.payload.title
      }
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },

    deleteCompletedTasks: (state) => {
      state.tasks = state.tasks.filter((task) => !task.completed)
    },

    setTaskBoards: (state, action: PayloadAction<ITaskBoard[]>) => {
      state.taskBoards = action.payload
    },

    setTeams: (state, action: PayloadAction<ITeam[]>) => {
      state.teams = action.payload
    },

    setTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload
    },

    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false
        state.tasks = action.payload
      })
      .addCase(fetchTasks.rejected, handleRejected)

      .addCase(fetchTeams.pending, handlePending)
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.loading = false
        state.teams = action.payload
      })
      .addCase(fetchTeams.rejected, handleRejected)

      .addCase(fetchTaskBoards.pending, handlePending)
      .addCase(fetchTaskBoards.fulfilled, (state, action) => {
        state.loading = false
        state.taskBoards = action.payload
      })
      .addCase(fetchTaskBoards.rejected, handleRejected)
  },
})

export const {
  addTask,
  toggleTask,
  updateTaskTitle,
  deleteTask,
  deleteCompletedTasks,
  setTaskBoards,
  setTeams,
  setTasks,
  clearError,
} = tasksSlice.actions

export default tasksSlice.reducer
