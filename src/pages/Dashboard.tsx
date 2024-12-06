import { Box, Typography, Grid2 as Grid, Card, CardContent, CardActions, Button, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/useStoreHooks'

export const Dashboard = () => {
  const { user } = useAppSelector((state) => state.auth)

  const taskBoards = [
    { id: '1', title: 'Personal Tasks' },
    { id: '2', title: 'Work Project' },
    { id: '3', title: 'Shopping List' },
  ]

  const teams = [
    { id: '1', name: 'Development Team' },
    { id: '2', name: 'Marketing Team' },
  ]

  return (
    <Box sx={{ p: 3 }}>
      {/* User Info Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 4,
          p: 2,
          borderRadius: 2,
          boxShadow: 2,
          backgroundColor: 'white',
        }}
      >
        <Avatar sx={{ width: 56, height: 56, mr: 2 }}>{user?.username?.charAt(0).toUpperCase() || 'U'}</Avatar>
        <Box>
          <Typography variant="h5">{user?.username || 'Unknown User'}</Typography>
          <Typography variant="body1" color="textSecondary">
            {user?.email || 'No email available'}
          </Typography>
        </Box>
      </Box>

      {/* Task Boards Section */}
      <Typography variant="h6" gutterBottom>
        Your Task Boards
      </Typography>
      <Grid container spacing={2}>
        {taskBoards.map((board) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={board.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{board.title}</Typography>
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

      {/* Teams Section */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Your Teams
      </Typography>
      <Grid container spacing={2}>
        {teams.map((team) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={team.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{team.name}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/teams/${team.id}`}>
                  View Team
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
