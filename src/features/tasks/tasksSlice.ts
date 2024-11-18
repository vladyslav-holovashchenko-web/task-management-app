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
      // todo:
    },

    toggleTask: (state, action: PayloadAction<string>) => {
      // todo:
    },

    updateTaskTitle: (state, action: PayloadAction<{ id: string; title: string }>) => {
      // todo:
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      // todo:
    },

    deleteCompletedTasks: (state) => {
      // todo:
    },
  },
})

export const { addTask, toggleTask, updateTaskTitle, deleteTask, deleteCompletedTasks } = tasksSlice.actions
export default tasksSlice.reducer
