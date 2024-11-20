import { FC } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  subtitle: string
  buttonText: string
}

const HeroSection: FC<Props> = ({ title, subtitle, buttonText }) => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/register')
  }

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: 'primary.main',
        color: 'white',
        overflow: 'hidden',
        padding: '2rem',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '100px',
          height: '100px',
          backgroundColor: 'secondary.main',
          borderRadius: '50%',
          animation: 'floating 6s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '20%',
          width: '150px',
          height: '150px',
          backgroundColor: 'secondary.light',
          borderRadius: '50%',
          animation: 'floating 8s ease-in-out infinite reverse',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '80px',
          height: '80px',
          backgroundColor: 'white',
          opacity: 0.5,
          borderRadius: '50%',
          animation: 'floating 4s ease-in-out infinite',
        }}
      />

      <Typography variant="h1" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        {subtitle}
      </Typography>
      <Button variant="contained" color="secondary" size="large" onClick={handleButtonClick}>
        {buttonText}
      </Button>

      <style>
        {`
          @keyframes floating {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  )
}

export default HeroSection
