import { PageName, ConcretePageName, DynamicPageName } from './page-route-map';
import {
  PUBLIC_ONLY,
  AUTH,
  USER,
  ADMIN,
  AuthType,
} from './auth-protectors/auth-types';

export type RoutePageData = {
  index?: true,
  path?: string,
  auth?: AuthType
};

export type ConcreteRoutePageData = RoutePageData & {
  pageName: ConcretePageName,
};

export type DynamicRoutePageData = RoutePageData & {
  pageName: DynamicPageName,
};

export type RouteData = RouteLayoutData | ConcreteRoutePageData | DynamicRoutePageData;

export type RouteLayoutData = {
  path: string,
  pageName: PageName,
  childRoutes: Array<RouteData>
};

const dynamicSymbols = ['*', ':'];

export const isConcretePath = (path?: RoutePageData['path']): boolean => {
  if (path) {
    return dynamicSymbols.every((dynamicSymbol) => !path.includes(dynamicSymbol));
  }

  return false;
};

export const isIndexPage = (index: RoutePageData['index']): boolean => Boolean(index);

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
          { path: 'change-password', pageName: 'ChangePasswordPage', auth: PUBLIC_ONLY },
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
      { path: 'orders', pageName: 'OrdersPage', auth: USER },
      { path: 'admin/services', pageName: 'ServicePanelPage', auth: ADMIN },
      { path: 'admin/users', pageName: 'UserPanelPage', auth: ADMIN },
      { path: 'admin/categories', pageName: 'CategoryPanelPage', auth: ADMIN },
      { path: 'admin/cities', pageName: 'CityPanelPage', auth: ADMIN },
    ],
  },
];

export default routeStructure;
