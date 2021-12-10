import React from 'react';

const lightTheme = {
  mode: 'light',
  background: '#fbfbfb',
  color: '#000000'
};

const darkTheme = {
  mode: 'dark',
  background: '#252525',
  color: 'white'
};

const redTheme = {
  mode: 'red',
  background: '#ee6666',
  color: 'white'
};

const greenTheme = {
  mode: 'green',
  background: '#66ee66',
  color: 'white'
};

export const themes = {
  'light': lightTheme,
  'dark': darkTheme,
  'red': redTheme,
  'green': greenTheme,
};

export const ThemeContext = React.createContext(lightTheme);

export const ThemeProvider = ThemeContext.Provider;


export default ThemeContext;
