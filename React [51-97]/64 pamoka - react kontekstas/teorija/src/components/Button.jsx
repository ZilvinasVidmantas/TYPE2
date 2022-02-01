import React, { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';

const Button = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme.background,
        color: theme.color,
        border: `1px solid ${theme.color}`
      }}
      {...props}
    >
      {children}
    </button>
  )
};

export default Button;

// 10
// 10
// 10:35
