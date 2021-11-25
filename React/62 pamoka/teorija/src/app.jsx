import PageLayout from "./components/layouts/page-layout";
import {ThemeProvider} from '@mui/material/styles';
import lightTheme from "./styles/light-theme";
import Button from "@mui/material/Button";

const App = () => {

  return (
    <ThemeProvider theme={lightTheme}>
      <PageLayout>
        <h1>Cia yra Appsas</h1>
        <Button variant="contained" color="primary">Mygtukas</Button>
      </PageLayout>
    </ThemeProvider>
  )
}

export default App;