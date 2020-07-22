/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useState, useMemo, useCallback,
} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core';
import './App.css';
import Login from './pages/Login';
import { isLoggedIn } from './client/jwt';
import Modals from './components/Modals';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [themeType, setThemeType] = useState<'light' | 'dark' | undefined>('light');
  const toggleMode = useCallback(() => {
    setThemeType(themeType === 'light' ? 'dark' : 'light');
  }, [themeType, setThemeType]);

  const theme: Theme = useMemo(() => {
    const light = themeType === 'light';
    return createMuiTheme({
      palette: {
        type: themeType,
        primary: {
          main: light ? '#1976d2' : '#90caf9',
        },
        background: {
          default: light ? '#fafafa' : '#121212',
          paper: light ? '#fff' : '#1c1c1c',
        },
      },
    });
  }, [themeType]);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleMode} />
      <Switch>
        <Route path="/login" exact render={() => (isLoggedIn() ? <Redirect to="/home" /> : <Login />)} />
      </Switch>
      <Modals />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
