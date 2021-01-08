import { useState, useEffect } from 'react';
import { createMuiTheme, Theme } from '@material-ui/core';

export const useThemeMode = () => {
  const localTheme = localStorage.getItem('themeType');
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | undefined>(
    localTheme === 'light' || localTheme === 'dark' ? localTheme : 'light',
  );

  const setTheme = () => {
    const theme = localStorage.getItem('themeType');
    if (theme === 'light' || theme === 'dark') {
      setCurrentTheme(theme ?? undefined);
    }
  };

  useEffect(() => {
    window.addEventListener('storage themeType', () => {
      setTheme();
    }, false);
    if (!localStorage.getItem('themeType')) {
      localStorage.setItem('themeType', 'light');
    }
  });

  const { setItem } = localStorage;
  // eslint-disable-next-line func-names
  localStorage.setItem = function (key, value) {
    setItem.apply(this, [key, value]);
    const e = new Event(`storage ${key}`);
    window.dispatchEvent(e);
  };

  return currentTheme;
};

export const computeTheme = (currentTheme: 'light' | 'dark' | undefined): Theme => {
  const light = currentTheme === 'light';
  return createMuiTheme({
    palette: {
      type: currentTheme,
      primary: {
        main: light ? '#1976d2' : '#f50057',
      },
      background: {
        default: light ? '#fafafa' : '#121212',
        paper: light ? '#fff' : '#1c1c1c',
      },
      error: {
        main: light ? '#B00020' : '#CF6679',
        contrastText: light ? '#FFFFFF' : '#121212',
      },
    },
  });
};
