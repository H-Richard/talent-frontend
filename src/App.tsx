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
import Footer from './components/Footer';

import JobDetails from './pages/Job Details';

const sampleJob = {
  active: true,
  author: {
    email: 'executive@gmail.com',
    executive: true,
    firstName: 'Executive',
    lastName: 'Doe',
    updatedAt: '2020-07-19T19:04:41.192603Z',
  },
  createdAt: '2020-07-19T19:04:41.199761Z',
  description: 'Market Things',
  desirements: ['Skills', 'Youtube'],
  expiresAt: '2020-07-19T19:04:41.199659Z',
  id: 2,
  requirements: ['Instagram', 'Facebook'],
  title: 'VP of Marketing',
  updatedAt: '2020-07-19T19:04:41.199761Z',
};

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
      <Switch>
        <Route path="/login" exact render={() => (isLoggedIn() ? <Redirect to="/home" /> : <Login />)} />
        <Route path="/details" exact render={() => <JobDetails job={sampleJob} />} />
      </Switch>
      <Modals />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
