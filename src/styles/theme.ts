import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#ff9800',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontWeight: 300,
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none',
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: '16px',
        },
      },
    },
  },
})

export default theme
