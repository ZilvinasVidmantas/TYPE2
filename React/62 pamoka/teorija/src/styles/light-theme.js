import { createTheme } from '@mui/material/styles';

export default createTheme({
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
      minHeight: 148
    }
  }
});
