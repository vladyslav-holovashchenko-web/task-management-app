import { Box } from '@mui/material'
import { Boards } from '../components/Dashboard/Boards'
import { Teams } from '../components/Dashboard/Teams'
import { ITaskBoard, ITeam } from '../interfaces'
import { boardsData, teamsData } from '../fakeData'

export const Dashboard = () => {
  const taskBoards: ITaskBoard[] = boardsData
  const teams: ITeam[] = teamsData

  return (
    <Box sx={{ p: 3 }}>
      <Boards taskBoards={taskBoards} />
      <Teams teams={teams} />
    </Box>
  )
}
