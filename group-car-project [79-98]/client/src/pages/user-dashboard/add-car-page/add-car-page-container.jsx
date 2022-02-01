import React from 'react';
import {
  Box,
  Container,
} from '@mui/material';

const AddCarFormContainer = ({ children }) => (
  <Container
    component="main"
    maxWidth="md"
    sx={(theme) => ({ pt: '5%', minHeight: `calc(100vh - (${theme.mixins.footer.height}px + ${theme.mixins.toolbar.height}px))` })}
  >
    <Box sx={{
      mb: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <Box component="form" noValidate sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        {children}
      </Box>
    </Box>
  </Container>
);
export default AddCarFormContainer;
