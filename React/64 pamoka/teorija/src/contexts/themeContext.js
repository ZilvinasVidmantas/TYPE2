import React from 'react';

export const lightTheme = {
  mode: 'light',
  background: '#fbfbfb',
  color: '#000000'
};

export const darkTheme = {
  mode: 'dark',
  background: '#252525',
  color: 'white'
};

export const ThemeContext = React.createContext(lightTheme);

export const ThemeProvider = ThemeContext.Provider;


export default ThemeContext;
