import { FC } from 'react'
import { Button, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        background: 'linear-gradient(to right, #2196F3, #1976D2)',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', marginBottom: '16px' }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: '16px' }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '32px' }}>
        The page you are looking for does not exist.
      </Typography>
      <Link to="/">
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            ':hover': { backgroundColor: '#1565C0' },
            padding: '10px 20px',
          }}
        >
          Go Back to Home
        </Button>
      </Link>
    </Box>
  )
}

export default NotFound
