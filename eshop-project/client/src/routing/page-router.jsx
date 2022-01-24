import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loggedInSelector } from '../store/auth';
import routeStructure from './route-structure';
import protectPageEnum from './auth-protectors/protect-page-enum';
import pageRouteEnum from './page-route-enum';

const mapRoutesRecursive = ({
  path,
  index,
  pageName,
  childRoutes,
  auth,
}) => {
  const Page = pageRouteEnum[pageName];
  if (childRoutes) {
    // Route is LayoutComponent
    return (
      <Route key={pageName} path={path} element={<Page />}>
        {childRoutes.map(mapRoutesRecursive)}
      </Route>
    );
  }
  // Route Protection
  const authenticatedPage = protectPageEnum[auth]
    ? protectPageEnum[auth](Page)
    : <Page />;

  return (
    <Route
      key={pageName}
      path={path}
      index={index}
      element={authenticatedPage}
    />
  );
};

const routes = routeStructure.map(mapRoutesRecursive);

const PageRouter = () => {
  const loggedIn = useSelector(loggedInSelector);

  return (
    <BrowserRouter>
      <Routes>
        {loggedIn !== null ? routes : null }
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
