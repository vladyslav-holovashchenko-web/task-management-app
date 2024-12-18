import { Box } from '@mui/material'
import { Boards } from '../components/Dashboard/Boards'
import { Teams } from '../components/Dashboard/Teams'
import { Header } from '../components/Header/Header'

export interface ITaskBoard {
  id: string
  title: string
  team: string
}

export interface ITeam {
  id: string
  name: string
}
export const Dashboard = () => {
  const taskBoards: ITaskBoard[] = [
    { id: '1', title: 'Personal Tasks', team: 'Personal' },
    { id: '2', title: 'Work Project', team: 'Development Team' },
    { id: '3', title: 'Shopping List', team: 'Marketing Team' },
  ]

  const teams: ITeam[] = [
    { id: '1', name: 'Development Team' },
    { id: '2', name: 'Marketing Team' },
  ]

  return (
    <Box sx={{ p: 3 }}>
      <Boards taskBoards={taskBoards} />
      <Teams teams={teams} />
    </Box>
  )
}
