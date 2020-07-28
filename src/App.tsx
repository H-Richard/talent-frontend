/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core';
import './App.css';
import Login from './pages/Login';
import { isLoggedIn } from './client/jwt';
import Modals from './components/Modals';
import Header from './components/Header';
import Footer from './components/Footer';
import { useThemeMode, computeTheme } from './theme';

function App() {
  const currentTheme = useThemeMode();

  const theme: Theme = useMemo(
    () => computeTheme(currentTheme),
    [currentTheme],
  );

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route path="/login" exact render={() => (isLoggedIn() ? <Redirect to="/home" /> : <Login />)} />
      </Switch>
      <Modals />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
