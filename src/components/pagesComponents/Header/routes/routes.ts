interface Route {
  title: string;
  url: string;
  id: string;
  isOnlyAdmin?: boolean;
}

const routes: Route[] = [
  { title: 'Tranlation', url: '/', id: '1' },
  { title: 'Dictionary', url: '/dictionary', id: '2' },
  { title: 'A', url: '/admin-panel', id: '3', isOnlyAdmin: true },
];

export const createNavLinks = (currentUserId: string) => {
  if (currentUserId === 'aZ08EgqfHC') {
    return routes;
  }
  return routes.filter((route) => !route.isOnlyAdmin);
};
