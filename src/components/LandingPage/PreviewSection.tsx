import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import previewImg from '../../assets/preview.png'

const PreviewSection: FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" sx={{ mb: 4 }}>
        See It in Action
      </Typography>
      <img
        src={previewImg}
        alt="App preview"
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: 8,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      />
    </Box>
  )
}

export default PreviewSection
