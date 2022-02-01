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
    component="main"
    maxWidth="xs"
    sx={(theme) => ({ pt: '5%', minHeight: `calc(100vh - (${theme.mixins.footer.height}px + ${theme.mixins.toolbar.height}px))` })}
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
