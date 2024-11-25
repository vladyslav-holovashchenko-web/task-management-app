import { FC, useState } from 'react'
import { Box, TextField, Button, Typography, Link as MuiLink, Grid2 as Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RegisterForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Перевірка, чи паролі збігаються
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      setIsLoading(true)
      setError('') // Очищаємо попередні помилки

      // Надсилання POST запиту на сервер для реєстрації
      const response = await axios.post('http://localhost:3000/users/register', {
        email,
        password,
      })

      console.log('Реєстрація успішна:', response.data)
      // Ви можете перенаправити користувача на іншу сторінку після успішної реєстрації
      // наприклад, на сторінку логіну:
      // history.push('/login')
    } catch (error) {
      // Обробка помилок
      setError('Не вдалося зареєструватися. Спробуйте ще раз.')
    } finally {
      setIsLoading(false)
    }

    setEmail('')
    setPassword('')
    setConfirmPassword('')
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
