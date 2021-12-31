import React from 'react';
import {
  Container,
  Box,
  Avatar,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const formContainer = ({ children, title }) => (
  <Container
    maxWidth="xs"
    component="main"
    sx={{ pt: '7vh' }}
  >
    <Box>
      <Box sx={{
        mb: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      </Box>
      {children}
    </Box>
  </Container>
);

export default formContainer;
