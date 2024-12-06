import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Task {
  id: string
  title: string
  completed: boolean
  boardId: string
  teamId: string
}

interface TaskBoard {
  id: string
  title: string
}

interface Team {
  id: string
  name: string
}

interface TasksState {
  tasks: Task[]
  taskBoards: TaskBoard[]
  teams: Team[]
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

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
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

    setTaskBoards: (state, action: PayloadAction<TaskBoard[]>) => {
      state.taskBoards = action.payload
    },

    setTeams: (state, action: PayloadAction<Team[]>) => {
      state.teams = action.payload
    },

    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
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
  setLoading,
  setError,
} = tasksSlice.actions

export default tasksSlice.reducer
