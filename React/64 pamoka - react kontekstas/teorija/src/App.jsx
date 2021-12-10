import React, { useState } from 'react';
import { ThemeProvider, themes } from './contexts/themeContext';

const themeArr = Object.values(themes);

const App = () => {
  const [theme, setTheme] = useState(themeArr[0].mode);

  const changeTheme = (e) => {
    const themeName = e.target.value;
    setTheme(themes[themeName]);
  }

  return (
    <ThemeProvider value={theme}>
      <div style={{
        color: theme.color,
        background: theme.background
      }}>
        <h1>Čia yra apsas</h1>
        <select onChange={changeTheme}>
          {themeArr.map(x => <option key={x.mode} value={x.mode}>{x.mode}</option>)}
        </select>
      </div>
    </ThemeProvider>
  );
}

export default App;

/*
  Sukurkite Raudoną temą, ir App komponenet įgalinkite temos pasirinkimą
    * light
    * dark
    * red

*/
