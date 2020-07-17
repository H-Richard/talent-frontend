const JWT_ACCESS_KEY = 'jwt:access';

export const JWT_ACCESS_EXPIRY = 1000 * 60 * 60;

export const saveJWT = (access: string): void => {
  localStorage.setItem(JWT_ACCESS_KEY, access);
};

export const clearJWT = (): void => {
  localStorage.removeItem(JWT_ACCESS_KEY);
};

export const getEncodedAccessToken = (): string | null => {
  const token = localStorage.getItem(JWT_ACCESS_KEY);
  return token ?? null;
};

export const isLoggedIn = (): boolean => !!(localStorage.getItem(JWT_ACCESS_KEY));
