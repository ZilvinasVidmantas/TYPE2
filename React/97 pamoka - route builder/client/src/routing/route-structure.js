import {
  PUBLIC_ONLY,
  AUTH,
  USER,
  ADMIN,
} from './auth-types';

import NavbarLayout from '../components/layouts/navbar-layout';
import ViewportLayout from '../components/layouts/viewport-layout';
import DashboardLayout from '../components/layouts/dashboard-layout';

// no-auth
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import CatalogPage from '../pages/catalog-page';
import ProductPage from '../pages/product-page';
import ErrorPage from '../pages/error-page';
// public-only
import LoginPage from '../pages/public-only/login-page';
import RegisterPage from '../pages/public-only/register-page';
// auth
import ProfilePage from '../pages/auth/profile-page';
// user
import UserInfoPage from '../pages/auth/user/user-info-page';
import OrdersPage from '../pages/auth/user/orders-page';
// admin
import StatisticsPage from '../pages/auth/admin/statistics-page';
import ProductPanelPage from '../pages/auth/admin/product-panel-page';
import UserPanelPage from '../pages/auth/admin/user-panel-page';

const routeStructure = [
  {
    path: '/',
    Page: NavbarLayout,
    childRoutes: [
      { index: true, Page: HomePage },
      { path: 'cart', Page: CartPage },
      { path: 'catalog', Page: CatalogPage },
      { path: 'product/:id', Page: ProductPage },
      {
        path: '/',
        Page: ViewportLayout,
        childRoutes: [
          { path: 'login', Page: LoginPage, auth: PUBLIC_ONLY },
          { path: 'register', Page: RegisterPage, auth: PUBLIC_ONLY },
        ],
      },
      { path: '*', Page: ErrorPage },
    ],
  },
  {
    path: '/dashboard',
    Page: DashboardLayout,
    childRoutes: [
      { index: true, Page: ProfilePage, auth: AUTH },
      { path: 'user-info', Page: UserInfoPage, auth: USER },
      { path: 'orders', Page: OrdersPage, auth: USER },
      { path: 'admin/statistics', Page: StatisticsPage, auth: ADMIN },
      { path: 'admin/products', Page: ProductPanelPage, auth: ADMIN },
      { path: 'admin/users', Page: UserPanelPage, auth: ADMIN },
    ],
  },
];

export default routeStructure;
