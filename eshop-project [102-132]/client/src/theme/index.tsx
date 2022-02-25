import { createTheme } from '@mui/material';

const theme = createTheme({
  shape: {
    borderRadius: 0,
  },
  mixins: {
    navbar: {
      height: 56,
    },
    drawer: {
      width: 240,
    },
  },
  transitions: {
    duration: {
      slow: 600,
    },
  },
  palette: {
    primary: {
      light: '#555555',
      main: '#454545',
      dark: '#353535',
      contrastText: '#fff',
    },
    secondary: {
      light: '#06d1ad',
      main: '#08bf9e',
      dark: '#03a387',
      contrastText: '#fff',
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
    fontFamily: '\'Mulish\', sans-serif',
  },
});

export default theme;
