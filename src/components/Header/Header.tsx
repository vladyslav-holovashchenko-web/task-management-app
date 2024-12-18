import { Box, Typography, Avatar } from '@mui/material'
import { useAppSelector } from '../../hooks/useStoreHooks'

export const Header = () => {
  const { user } = useAppSelector((state) => state.auth)
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 4,
        p: 2,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: 'white',
      }}
    >
      <Avatar sx={{ width: 56, height: 56, mr: 2 }}>{user?.username?.charAt(0).toUpperCase() || 'U'}</Avatar>
      <Box>
        <Typography variant="h5">{user?.username || 'Unknown User'}</Typography>
        <Typography variant="body1" color="textSecondary">
          {user?.email || 'No email available'}
        </Typography>
      </Box>
    </Box>
  )
}
