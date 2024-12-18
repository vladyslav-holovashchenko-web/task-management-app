import { Typography, Grid2 as Grid, Card, CardContent, CardActions, Button } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ITaskBoard } from '../../interfaces'

type Props = {
  taskBoards: ITaskBoard[]
}
export const Boards: FC<Props> = ({ taskBoards }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Your Task Boards
      </Typography>
      <Grid container spacing={2}>
        {taskBoards.map((board) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={board.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{board.title}</Typography>
                <Typography variant="body1" color="textSecondary">
                  {board.team}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/boards/${board.id}`}>
                  Open Board
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
