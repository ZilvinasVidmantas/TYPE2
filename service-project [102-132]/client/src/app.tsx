import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import PageRouter from './routing/page-router';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <PageRouter />
  </ThemeProvider>
);

export default App;
