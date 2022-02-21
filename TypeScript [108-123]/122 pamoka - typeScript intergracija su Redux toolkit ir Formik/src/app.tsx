import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import {
  Routes,
  BrowserRouter,
  Route
} from 'react-router-dom';
import BaseLayout from './layouts/base-layout';
import HomePage from './pages/home-page';
import PostsPage from './pages/posts-page';
import UsersPage from './pages/users-page';
import LoginPage from './pages/login-page';
import theme from './theme';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BaseLayout />} >
              <Route index element={<HomePage />} />
              <Route path="posts" element={<PostsPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>

  );
};

export default App;
