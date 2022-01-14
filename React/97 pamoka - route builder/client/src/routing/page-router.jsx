import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import routeStructure from './route-structure';
import protectPageEnum from './auth-protectors/protect-page-enum';

const printRecursive = ({
  path,
  index,
  Page,
  childRoutes,
  auth,
}) => {
  if (childRoutes) {
    // Route is LayoutComponent
    return (
      <Route key={Page.name} path={path} element={<Page />}>
        {childRoutes.map(printRecursive)}
      </Route>
    );
  }
  // Route Protection
  const authenticatedPage = protectPageEnum[auth]
    ? protectPageEnum[auth](Page)
    : <Page />;

  return (
    <Route
      key={Page.name}
      path={path}
      index={index}
      element={authenticatedPage}
    />
  );
};

const routes = routeStructure.map(printRecursive);

const PageRouter = () => (
  <BrowserRouter>
    <Routes>
      {routes}
    </Routes>
  </BrowserRouter>
);

export default PageRouter;
