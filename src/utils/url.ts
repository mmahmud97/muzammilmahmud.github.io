const base = import.meta.env.BASE_URL;
export const url = (path: string) =>
  path === '/' ? base.replace(/\/$/, '') || '/' : `${base}${path.replace(/^\//, '')}`;
