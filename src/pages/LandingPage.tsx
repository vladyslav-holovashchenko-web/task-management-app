import { FC } from 'react'
import { Box, Button, Typography, Link as MuiLink } from '@mui/material'
import { Link } from 'react-router-dom'

import { HeroSection, FeaturesSection, PreviewSection } from '../components/LandingPage'

const LandingPage: FC = () => {
  return (
    <Box>
      <HeroSection
        title="Manage Your Tasks with Ease"
        subtitle="A modern task management app to boost your productivity."
        buttonText="Get Started"
      />

      <FeaturesSection />
      <PreviewSection />

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
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" color="primary" size="large" component={Link} to="/register">
            Sign Up
          </Button>
          <Button variant="outlined" color="secondary" size="large" component={Link} to="/login">
            Login
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          py: 4,
          backgroundColor: 'text.primary',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          © 2024 Task Management App. All rights reserved.{' '}
          <MuiLink component={Link} to="/login" color="secondary" underline="hover">
            Login
          </MuiLink>{' '}
          or{' '}
          <MuiLink component={Link} to="/register" color="secondary" underline="hover">
            Register
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  )
}

export default LandingPage
