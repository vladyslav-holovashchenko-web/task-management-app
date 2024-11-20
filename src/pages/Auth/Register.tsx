import { Box, Typography } from '@mui/material'
import { RegisterForm } from '../../components/Auth'

const RegisterPage = () => {
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
          Create a New Account
        </Typography>

        <RegisterForm />
      </Box>
    </Box>
  )
}

export default RegisterPage
