export function onRouteChange({ matchedRoutes }: any) {
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }
}
