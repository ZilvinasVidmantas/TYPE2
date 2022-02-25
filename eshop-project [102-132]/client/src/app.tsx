import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import store from './store';
import theme from './theme';
import PageRouter from './routing/page-router';

const App: React.FC = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageRouter />
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
