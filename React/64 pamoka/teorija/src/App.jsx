import React, { useState } from 'react';
import { ThemeProvider, lightTheme, darkTheme } from './contexts/themeContext';
import Button from './components/Button';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = () => {
    if (theme.mode === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }

  return (
    <ThemeProvider value={theme}>
      <div style={{
        color: theme.color,
        background: theme.background
      }}>
        <h1>Čia yra apsas</h1>
        <Button onClick={changeTheme}>Change Theme</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
