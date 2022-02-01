import React from 'react';
import {
  BrowserRouter as RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import store from './store';
import { lightTheme } from './styles/theme';
import HomePage from './pages/home-page';
import CarSearch from './pages/car-search-page';
import CarPage from './pages/car-page';
import SignIn from './pages/sign-in-page';
import SignUp from './pages/sign-up-page';
import PageLayout from './components/layouts/page-layout';
import WindowHeightLayout from './components/layouts/window-height-layout';
import UserDashboard from './pages/user-dashboard/index';
import DashboardLayout from './components/layouts/dashboard-layout';
import AddCar from './pages/user-dashboard/add-car-page';
import NotFound from './pages/not-found-page';

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <RouterProvider>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/search" element={<CarSearch />} />
            </Route>
            <Route path="/" element={<WindowHeightLayout />}>
              <Route path="/car/:id" element={<CarPage />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/" element={<DashboardLayout />}>
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/add-car" element={<AddCar />} />
            </Route>
          </Routes>
        </RouterProvider>
      </CssBaseline>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
