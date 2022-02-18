import { createTheme } from '@mui/material';

// Default theme
// https://mui.com/customization/default-theme/

const baseTheme = createTheme();

const theme = createTheme(baseTheme, {
  palette: {
    facebook: {
      main: '#1b74e4',
      light: '#17aafd',
      dark: '#0570e6',
      contrastText: baseTheme.palette.common.white,
    },
    twitter: {
      main: '#1DA1F2',
      light: '#3baaed',
      dark: '#1799e8',
      contrastText: baseTheme.palette.common.white,
    }
  },
  mixins: {
    toolbar: {
      minHeight: 60,
      [baseTheme.breakpoints.up('sm')]: {
        minHeight: 60
      },
      [`${baseTheme.breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 60
      }
    },
    footer: {
      minHeight: 60,
    }
  }
});

export default theme;
