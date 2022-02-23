import { PageName } from './page-route-map';
import {
  PUBLIC_ONLY,
  AUTH,
  USER,
  ADMIN,
  AuthType,
} from './auth-types';

export type RoutePageData = {
  index?: true,
  path?: string,
  pageName: PageName,
  auth?: AuthType
};
export type RouteData = Omit<Partial<RoutePageData & RouteLayoutData>, 'pageName'> & {
  pageName: PageName,
};

export type RouteLayoutData = {
  path: string,
  pageName: PageName,
  childRoutes: Array<RouteData>
};

const routeStructure: Array<RouteData> = [
  {
    path: '/',
    pageName: 'NavbarLayout',
    childRoutes: [
      { index: true, pageName: 'HomePage' },
      { path: 'cart', pageName: 'CartPage' },
      { path: 'catalog', pageName: 'CatalogPage' },
      { path: 'product/:id', pageName: 'ProductPage' },
      {
        path: '/',
        pageName: 'ViewportLayout',
        childRoutes: [
          { path: 'login', pageName: 'LoginPage', auth: PUBLIC_ONLY },
          { path: 'register', pageName: 'RegisterPage', auth: PUBLIC_ONLY },
        ],
      },
      { path: '*', pageName: 'ErrorPage' },
    ],
  },
  {
    path: '/dashboard',
    pageName: 'DashboardLayout',
    childRoutes: [
      { index: true, pageName: 'ProfilePage', auth: AUTH },
      { path: 'user-info', pageName: 'UserInfoPage', auth: USER },
      { path: 'orders', pageName: 'OrdersPage', auth: USER },
      { path: 'admin/statistics', pageName: 'StatisticsPage', auth: ADMIN },
      { path: 'admin/products', pageName: 'ProductPanelPage', auth: ADMIN },
      { path: 'admin/users', pageName: 'UserPanelPage', auth: ADMIN },
    ],
  },
];

export default routeStructure;
