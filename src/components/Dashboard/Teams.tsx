import { FC } from 'react'
import { Typography, Grid2 as Grid, Card, CardContent, CardActions, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { ITeam } from '../../pages/Dashboard'

type Props = {
  teams: ITeam[]
}

export const Teams: FC<Props> = ({ teams }) => {
  return (
    <>
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
    </>
  )
}
