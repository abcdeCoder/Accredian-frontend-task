import React from 'react';
import { Avatar, Box, Typography, Divider } from '@mui/material';
import {Button} from '@mui/material';
import { deepOrange, green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));
const userdetalis = ({ user, setUser }) => {

    const handleLogout= (e)=>{
       localStorage.clear();
       setUser(null)
    }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.z9CeiGNq8sHzpcAbcgtm1QHaHa?rs=1&pid=ImgDetMain" />
      </StyledBadge>
      <Typography variant="h5">Hi👋{user.username}❣welcome🙇to Accredian </Typography>
      <Typography variant="subtitle1">your email id is 📧{user.email}</Typography>
      <Divider sx={{ width: '100%', my: 3 }} />
      <Button variant="contained" color="primary" onClick={handleLogout}>
      Logout
    </Button>
    </Box>
  );
};

export default userdetalis;
