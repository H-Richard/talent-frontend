import { User } from '../app/modular/auth/types';

const CURRENT_USER = 'user:current';

export const getCurrentUser = (): User | null => {
  const userString = localStorage.getItem(CURRENT_USER);
  if (!userString) {
    return null;
  }
  return JSON.parse(userString);
};

export const saveCurrentUser = (user: User) => {
  localStorage.setItem(CURRENT_USER, JSON.stringify(user));
};

export const clearCurrentUser = () => {
  localStorage.removeItem(CURRENT_USER);
};
