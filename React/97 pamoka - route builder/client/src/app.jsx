import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import store from './store';
import theme from './styles/theme';
import NavbarLayout from './components/layouts/navbar-layout';
import ViewportLayout from './components/layouts/viewport-layout';
import DashboardLayout from './components/layouts/dashboard-layout';

// no-auth
import HomePage from './pages/home-page';
import CartPage from './pages/cart-page';
import CatalogPage from './pages/catalog-page';
import ProductPage from './pages/product-page';
import ErrorPage from './pages/error-page';
// public-only
import LoginPage from './pages/public-only/login-page';
import RegisterPage from './pages/public-only/register-page';
// auth
import ProfilePage from './pages/auth/profile-page';
// user
import UserInfoPage from './pages/auth/user/user-info-page';
import OrdersPage from './pages/auth/user/orders-page';
// admin
import StatisticsPage from './pages/auth/admin/statistics-page';
import ProductPanelPage from './pages/auth/admin/product-panel-page';
import UserPanelPage from './pages/auth/admin/user-panel-page';

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<NavbarLayout />}>
            <Route index element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="/" element={<ViewportLayout />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<ProfilePage />} />
            <Route path="user-info" element={<UserInfoPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="admin/statistics" element={<StatisticsPage />} />
            <Route path="admin/items" element={<ProductPanelPage />} />
            <Route path="admin/users" element={<UserPanelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
