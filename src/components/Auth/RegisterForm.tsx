import { FC, useState } from 'react'
import { Box, TextField, Button, Typography, Link as MuiLink, Grid2 as Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/useStoreHooks'
import { registerUser, RegisterUserDTO } from '../../features/auth/authSlice'

const RegisterForm: FC = () => {
  const [registerDTO, setRegisterDTO] = useState<RegisterUserDTO>({
    username: '',
    email: '',
    password: '',
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useAppDispatch()
  const { isLoading, error } = useAppSelector((state) => state.auth)

  const handleInputChange = (field: keyof RegisterUserDTO, value: string) => {
    setRegisterDTO((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (registerDTO.password !== confirmPassword) {
      console.log('Passwords do not match')
      return
    }

    try {
      await dispatch(registerUser(registerDTO)).unwrap()
      console.log('Registration successful')
    } catch (err) {
      console.error('Registration error:', err)
    }
  }

  return (
    <Box
      sx={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '2rem',
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }} align="center">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={registerDTO.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              required
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              value={registerDTO.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={registerDTO.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              required
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Grid>
          {error && (
            <Grid size={{ xs: 12 }}>
              <Typography color="error" variant="body2" align="center">
                {error}
              </Typography>
            </Grid>
          )}
          <Grid size={{ xs: 12 }}>
            <Button fullWidth type="submit" variant="contained" color="primary" disabled={isLoading}>
              {isLoading ? 'Registering...' : 'Register'}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="body2">
          Already have an account?{' '}
          <MuiLink component={Link} to="/login" color="primary">
            Login here
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  )
}

export default RegisterForm
