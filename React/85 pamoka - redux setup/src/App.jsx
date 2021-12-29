import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import TodoAppPage from './pages/todo-app-page';
import Home from './pages/home-page';
import Navbar from './components/partials/navbar';
import store from './store';

const App = () => (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-app" element={<TodoAppPage />} />
      </Routes>
    </BrowserRouter>
  </ReduxProvider>
);

export default App;
