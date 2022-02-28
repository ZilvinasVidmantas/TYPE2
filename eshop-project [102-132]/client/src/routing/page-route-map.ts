import React from 'react';
// no-auth
import HomePage from 'pages/home-page';
import CartPage from 'pages/cart-page';
import CatalogPage from 'pages/catalog-page';
import ProductPage from 'pages/product-page';
import ErrorPage from 'pages/error-page';
// public-only
import LoginPage from 'pages/public-only/login-page';
import RegisterPage from 'pages/public-only/register-page';
// auth
import ProfilePage from 'pages/auth/profile-page';
// user
import OrdersPage from 'pages/auth/user/orders-page';
// admin
import ServicePanelPage from 'pages/auth/admin/service-panel-page';
import CategoryPanelPage from 'pages/auth/admin/category-panel-page';
import CityPanelPage from 'pages/auth/admin/city-panel-page';
import UserPanelPage from 'pages/auth/admin/user-panel-page';

import DashboardLayout from 'components/layouts/dashboard-layout';
import NavbarLayout from 'components/layouts/navbar-layout';
import ViewportLayout from 'components/layouts/viewport-layout';

export type LayoutPageName = 'ViewportLayout' | 'NavbarLayout' | 'DashboardLayout';
export type DynamicPageName = 'ErrorPage' | 'ProductPage';
export type ConcretePageName = 'HomePage' | 'CartPage' | 'CatalogPage' | 'LoginPage' | 'RegisterPage' | 'ProfilePage' | 'OrdersPage' | 'ServicePanelPage' | 'UserPanelPage' | 'CityPanelPage' | 'CategoryPanelPage';

export type PageName = LayoutPageName | ConcretePageName | DynamicPageName;

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
  OrdersPage,
  ServicePanelPage,
  UserPanelPage,
  CategoryPanelPage,
  CityPanelPage,
};

export default pageRouteMap;
