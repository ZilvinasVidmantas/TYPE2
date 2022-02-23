import routeStructure from './route-structure';
import { RouteData } from './route-structure';
import { PageName } from './page-route-map';

type Paths = {
  [key in PageName]?: string
};

type PagePathsNameObj = {
  [PathName in keyof Paths]-?: PathName extends `${infer Name}Page` ? PathName : never;
};

type PagePathsNames = PagePathsNameObj[keyof Paths];

type PagePaths = Required<Pick<Paths, PagePathsNames>>;

const dynamicSymbols = ['*', ':'];

const pathValid = (path?: string, index?: true) => {
  if (path) {
    const noDynamicSymbols = dynamicSymbols.every((dynamicSymbol) => !path.includes(dynamicSymbol));

    return noDynamicSymbols;
  }

  return index;
};

const mapRoutePathsRecursive = (paths: Paths, {
  path,
  index,
  pageName,
  childRoutes,
}: RouteData): Paths => {
  if (childRoutes) {
    const childPaths = childRoutes.reduce(mapRoutePathsRecursive, {});
    const childPathObjectArray = Object.entries(childPaths) as [PageName, string][];
    childPathObjectArray.forEach(([childPageName, childPathValue]) => {
      if (path) {
        const finalParentPath = path[path.length - 1] !== '/' ? `${path}/` : path;
        const finalChildPath = childPathValue ?? '/';
        const finalPath = finalParentPath + finalChildPath;
        childPaths[childPageName] = finalPath.replace('//', '/');
      }
    });

    return { ...paths, ...childPaths };
  }
  const newPaths = { ...paths };
  if (pathValid(path, index)) {
    newPaths[pageName] = path;
  }

  return newPaths;
};

const routes = routeStructure.reduce(mapRoutePathsRecursive, {}) as PagePaths;

export default routes;
