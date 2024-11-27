import { FC, useState } from 'react'
import { Box, TextField, Button, Typography, Link as MuiLink, Grid2 as Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/useStoreHooks'
import { registerUser, resetError } from '../../features/auth/authSlice'

const RegisterForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useAppDispatch()
  const { isLoading, error } = useAppSelector((state) => state.auth)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      dispatch(resetError())
      alert('Passwords do not match')
      return
    }

    await dispatch(registerUser({ email, password }))
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
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
