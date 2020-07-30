import React, { useMemo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider, Theme } from '@material-ui/core';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
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
        <Route path="/signup" exact render={() => (<Signup />)} />
      </Switch>
      <Modals />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
