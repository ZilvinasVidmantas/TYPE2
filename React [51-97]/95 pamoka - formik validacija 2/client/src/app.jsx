import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import RequirePublic from './routing/require-public';
import RequireAuth from './routing/require-auth';

import store from './store';
import theme from './styles/theme';
import Navbar from './components/partials/navbar';
import SingleVieportLayout from './components/layouts/single-vieport-layout';

import {
  HomeRoute,
  TodoAppRoute,
  LoginRoute,
  RegisterRoute,
  ProfileRoute,
} from './routing/routes';

import TodoAppPage from './pages/todo-app-page';
import Home from './pages/home-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import ErrorPage from './pages/error-page';
import ProfilePage from './pages/profile-page';

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path={HomeRoute.link} element={<Home />} />
          <Route path={TodoAppRoute.link} element={<TodoAppPage />} />
          <Route path="/" element={<SingleVieportLayout />}>
            <Route
              path={ProfileRoute.link}
              element={(
                <RequireAuth>
                  <ProfilePage />
                </RequireAuth>
              )}
            />
            <Route
              path={LoginRoute.link}
              element={(
                <RequirePublic>
                  <LoginPage />
                </RequirePublic>
              )}
            />
            <Route
              path={RegisterRoute.link}
              element={(
                <RequirePublic>
                  <RegisterPage />
                </RequirePublic>
              )}
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
