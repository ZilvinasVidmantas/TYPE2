import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import store from './store';
import Navbar from './components/partials/navbar';
import TodoAppPage from './pages/todo-app-page';
import Home from './pages/home-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';

const App = () => (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-app" element={<TodoAppPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </ReduxProvider>
);

export default App;
