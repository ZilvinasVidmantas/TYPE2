import { createTheme } from '@mui/material';

const theme = createTheme({
  mixins: {
    navbar: {
      height: 56,
    },
  },
  transitions: {
    duration: {
      slow: 600,
    },
  },
});

export default theme;
