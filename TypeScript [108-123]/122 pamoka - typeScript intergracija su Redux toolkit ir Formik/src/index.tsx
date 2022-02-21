import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { store } from './app/store';
import { Provider as ReduxProvider } from 'react-redux';

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById('root'),
);
