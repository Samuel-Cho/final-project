export default function ParseRoute(hashRoute) {
  if (hashRoute.startsWith('#')) {
    hashRoute.replace('#', '');
  }
  const [path, queryString] = hashRoute.split('?');
  const params = new URLSearchParams(queryString);
  return { path, params };
}
