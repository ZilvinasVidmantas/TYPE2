import { CssBaseline } from '@mui/material';
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

const App = () => {

  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />} >
            <Route index element={<HomePage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="users" element={<UsersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  );
};

export default App;
