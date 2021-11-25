import PageLayout from "./components/layouts/page-layout";
import { ThemeProvider } from '@mui/material/styles';
import lightTheme from "./styles/light-theme";

const App = () => {

  return (
    <ThemeProvider theme={lightTheme}>
      <PageLayout>
        <h1>Cia yra Appsas</h1>
      </PageLayout>
    </ThemeProvider>
  )
}

export default App;
