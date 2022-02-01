import { createTheme } from '@mui/material/styles';

export default createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#ff385c'
    },
    grey: {
      A150: '#ebebeb'
    }
  },
  mixins: {
    toolbar: {
      height: 148,
    }
  }
});
