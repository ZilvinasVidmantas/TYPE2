import { createTheme } from '@mui/material';

// Default theme
// https://mui.com/customization/default-theme/

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    facebook: PaletteColor
  }

  interface PaletteOptions {
    facebook: PaletteColor
  }
}

const baseTheme = createTheme();

const theme = createTheme(baseTheme, {
  palette: {
    facebook: {
      main: '#1b74e4',
      light: '#17aafd',
      dark: '#0570e6',
      contrastText: baseTheme.palette.common.white,
    }
  }
});

export default theme;
