import { Box, Typography, Button, Container, Grid } from '@mui/material'
import { FC } from 'react'

export const LandingPage: FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
          backgroundColor: 'primary.main',
          color: 'white',
          padding: '2rem',
        }}
      >
        <Typography variant="h1" sx={{ mb: 2 }}>
          Manage Your Tasks with Ease
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          A modern task management app to boost your productivity.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                🌟 Easy Task Organization
              </Typography>
              <Typography>Keep track of your tasks with a clean and intuitive interface.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                📅 Calendar Integration
              </Typography>
              <Typography>Sync your tasks with your calendar to never miss a deadline.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                📊 Insights and Analytics
              </Typography>
              <Typography>Monitor your productivity with detailed reports and charts.</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Preview Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" sx={{ mb: 4 }}>
          See It in Action
        </Typography>
        <img
          src="/assets/preview.png"
          alt="App preview"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: 8,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
      </Box>

      {/* Call-to-Action */}
      <Box
        sx={{
          py: 6,
          backgroundColor: 'primary.light',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Ready to Get Started?
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
          Sign Up
        </Button>
        <Button variant="outlined" color="secondary" size="large">
          Learn More
        </Button>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          py: 4,
          backgroundColor: 'text.primary',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">© 2024 Task Management App. All rights reserved.</Typography>
      </Box>
    </Box>
  )
}
