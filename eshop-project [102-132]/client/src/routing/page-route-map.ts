import React from 'react';
// no-auth
import HomePage from '@pages/home-page';
import CartPage from '@pages/cart-page';
import CatalogPage from '@pages/catalog-page';
import ProductPage from '@pages/product-page';
import ErrorPage from '@pages/error-page';
// public-only
import LoginPage from '@pages/public-only/login-page';
import RegisterPage from '@pages/public-only/register-page';
// auth
import ProfilePage from '@pages/auth/profile-page';
// user
import UserInfoPage from '@pages/auth/user/user-info-page';
import OrdersPage from '@pages/auth/user/orders-page';
// admin
import StatisticsPage from '@pages/auth/admin/statistics-page';
import ProductPanelPage from '@pages/auth/admin/product-panel-page';
import UserPanelPage from '@pages/auth/admin/user-panel-page';

import DashboardLayout from '@layouts/dashboard-layout';
import NavbarLayout from '@layouts/navbar-layout';
import ViewportLayout from '@layouts/viewport-layout';

export type PageName = 'ViewportLayout'
  | 'NavbarLayout'
  | 'DashboardLayout'
  | 'HomePage'
  | 'CartPage'
  | 'CatalogPage'
  | 'ProductPage'
  | 'ErrorPage'
  | 'LoginPage'
  | 'RegisterPage'
  | 'ProfilePage'
  | 'UserInfoPage'
  | 'OrdersPage'
  | 'StatisticsPage'
  | 'ProductPanelPage'
  | 'UserPanelPage';

export type PageRouteMap = {
  [key in PageName]: React.FC
};

const pageRouteMap: PageRouteMap = {
  ViewportLayout,
  NavbarLayout,
  DashboardLayout,
  HomePage,
  CartPage,
  CatalogPage,
  ProductPage,
  ErrorPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  UserInfoPage,
  OrdersPage,
  StatisticsPage,
  ProductPanelPage,
  UserPanelPage,
};

export default pageRouteMap;
