import PageLayout from "./components/layouts/page-layout";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from "./styles/light-theme";

const App = () => {

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
        <PageLayout>
          <h1>Cia yra Appsas</h1>
        </PageLayout>
    </ThemeProvider>
  )
}

export default App;
