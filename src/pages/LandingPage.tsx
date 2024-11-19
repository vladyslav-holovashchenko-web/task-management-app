import { Box, Button, Typography } from '@mui/material'
import { FC } from 'react'
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
        <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
          Sign Up
        </Button>
        <Button variant="outlined" color="secondary" size="large">
          Learn More
        </Button>
      </Box>

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

export default LandingPage
