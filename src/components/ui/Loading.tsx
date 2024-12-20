import { FC } from 'react'
import { CircularProgress, Box } from '@mui/material'

export const Loading: FC = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <CircularProgress />
  </Box>
)
