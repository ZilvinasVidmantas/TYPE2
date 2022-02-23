import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './services/auth-service';
import './theme/theme-types';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
