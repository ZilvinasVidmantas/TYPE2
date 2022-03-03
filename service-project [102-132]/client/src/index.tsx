import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import store from './store';
import { Provider as ReduxProvider } from 'react-redux';
import './theme/theme-types';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
