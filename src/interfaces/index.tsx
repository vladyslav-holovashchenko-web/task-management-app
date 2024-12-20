export interface ITask {
  id: string
  title: string
  description: string
  dueDate: string
  priority: string
  status: string
  assignedTo: string
  boardId: string
  completed: boolean
}
export interface ITaskBoard {
  id: string
  title: string
  team: string
  tasks: ITask[]
}

export interface ITeam {
  id: string
  name: string
  boards: ITaskBoard[]
}
