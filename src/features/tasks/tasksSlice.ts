import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Task {
  id: string
  title: string
  completed: boolean
}

interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ id: string; title: string }>) => {
      state.tasks.push({
        id: action.payload.id,
        title: action.payload.title,
        completed: false,
      })
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
  },
})

export const { addTask, toggleTask, updateTaskTitle, deleteTask, deleteCompletedTasks } = tasksSlice.actions
export default tasksSlice.reducer
