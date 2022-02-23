import routeStructure, {
  RouteData,
  RoutePageData,
  RouteLayoutData,
  ConcreteRoutePageData,
  isConcretePath,
  isIndexPage
} from './route-structure';
import { ConcretePageName, PageName } from './page-route-map';

type PartialConcretePagePathMap = {
  [key in ConcretePageName]?: string
};

type PartialPagePathMap = {
  [key in PageName]?: string
};

const mapRoutePathsRecursive = (
  paths: PartialConcretePagePathMap | PartialPagePathMap,
  routeData: RouteData
): PartialConcretePagePathMap => {

  if ((routeData as RouteLayoutData).childRoutes) {
    // Papildomi visi keliai pagal LayoutRouteData path savybę
    const { childRoutes, path } = routeData as RouteLayoutData;
    const childPaths = childRoutes.reduce<PartialPagePathMap>(mapRoutePathsRecursive, {});
    const childPathObjectArray = Object.entries(childPaths) as [PageName, string][];

    childPathObjectArray.forEach(([childPageName, childPathValue]) => {
      const finalParentPath = path[path.length - 1] !== '/' ? `${path}/` : path;
      const finalChildPath = childPathValue ?? '/';
      const finalPath = finalParentPath + finalChildPath;

      childPaths[childPageName] = finalPath.replace('//', '/');
    });

    return { ...paths, ...childPaths };
  }
  // Į galutinį objektą įdedamas pilnai suformuotas ConcretePageName tipo elementas

  const { path, index } = routeData as RoutePageData;

  const newPaths = { ...paths };
  if (isConcretePath(path) || isIndexPage(index)) {
    const { pageName } = routeData as ConcreteRoutePageData;
    newPaths[pageName] = path;
  }

  return newPaths;
};

const routes = routeStructure.reduce<PartialConcretePagePathMap>(mapRoutePathsRecursive, {}) as Required<PartialConcretePagePathMap>;

export default routes;
