import { createTheme } from '@mui/material';

const theme = createTheme({
  mixins: {
    navbar: {
      height: 56,
    },
  },
});

export default theme;
