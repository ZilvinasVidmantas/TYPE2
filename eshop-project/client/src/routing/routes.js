import routeStructure from './route-structure';

const dynamicSymbols = ['*', ':'];

const pathValid = (path, index) => {
  if (path) {
    const noDynamicSymbols = dynamicSymbols.every((dynamicSymbol) => !path.includes(dynamicSymbol));
    return noDynamicSymbols;
  }
  return index;
};

const mapRoutePathsRecursive = (paths, {
  path,
  index,
  pageName,
  childRoutes,
}) => {
  if (childRoutes) {
    const childPaths = childRoutes.reduce(mapRoutePathsRecursive, {});
    Object.entries(childPaths).forEach(([childPageName, childPathValue]) => {
      const finalParentPath = path[path.length - 1] !== '/' ? `${path}/` : path;
      const finalChildPath = childPathValue ?? '/';
      const finalPath = finalParentPath + finalChildPath;
      childPaths[childPageName] = finalPath.replace('//', '/');
    });
    return { ...paths, ...childPaths };
  }
  const newPaths = { ...paths };
  if (pathValid(path, index)) {
    newPaths[pageName] = path;
  }
  return newPaths;
};

const routes = routeStructure.reduce(mapRoutePathsRecursive, {});

export default routes;
