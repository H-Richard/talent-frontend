import { clearCurrentUser } from './user';

const JWT_ACCESS_KEY = 'jwt:access';
const JWT_EXPIRY = 'jwt:expiry';

export const JWT_ACCESS_EXPIRY = 1000 * 60 * 50;

export const saveJWT = (access: string): void => {
  localStorage.setItem(JWT_ACCESS_KEY, access);
  localStorage.setItem(JWT_EXPIRY, String(Date.now() + JWT_ACCESS_EXPIRY));
};

export const clearJWT = (): void => {
  localStorage.removeItem(JWT_ACCESS_KEY);
};

export const getEncodedAccessToken = (): string | null => {
  const expiry = localStorage.getItem(JWT_EXPIRY) as unknown as number;
  if (!expiry || Date.now() > expiry) {
    clearCurrentUser();
    clearJWT();
    return null;
  }
  const token = localStorage.getItem(JWT_ACCESS_KEY);
  return token ?? null;
};

export const isLoggedIn = (): boolean => !!(getEncodedAccessToken());
