import { Box, Typography } from '@mui/material'
import { LoginForm } from '../../components/Auth'

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
        padding: '2rem',
      }}
    >
      <Box sx={{ maxWidth: '500px', width: '100%' }}>
        <Typography variant="h4" sx={{ mb: 4 }} align="center">
          Welcome Back!
        </Typography>

        <LoginForm />
      </Box>
    </Box>
  )
}

export default LoginPage
