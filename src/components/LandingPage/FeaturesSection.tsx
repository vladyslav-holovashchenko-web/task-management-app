import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { FC } from 'react'

const features = [
  {
    icon: '🌟',
    title: 'Easy Task Organization',
    description: 'Keep track of your tasks with a clean and intuitive interface.',
  },
  {
    icon: '📅',
    title: 'Calendar Integration',
    description: 'Sync your tasks with your calendar to never miss a deadline.',
  },
  {
    icon: '📊',
    title: 'Insights and Analytics',
    description: 'Monitor your productivity with detailed reports and charts.',
  },
]

const FeaturesSection: FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>
          Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" gutterBottom>
                {feature.icon} {feature.title}
              </Typography>
              <Typography>{feature.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default FeaturesSection
