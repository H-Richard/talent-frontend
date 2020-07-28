import React, { useCallback } from 'react';
import {
  makeStyles, withStyles, createStyles, Theme,
} from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button, Switch, Grid,
} from '@material-ui/core';
import Moon from './img/moon.png';
import Sun from './img/sun.png';
// eslint-disable-next-line import/no-cycle
import { useThemeMode } from '../../theme';

const DarkModeSwitch = withStyles((theme: Theme) => createStyles({
  root: {
    width: 80,
    height: 48,
    padding: 8,
  },
  switchBase: {
    padding: 11,
    color: '#ff6a00',
  },
  thumb: {
    width: 26,
    height: 26,
    backgroundColor: '#fff',
  },
  track: {
    background: `${theme.palette.grey[800]} !important`,
    backgroundSize: '26px 25px !important',
    backgroundImage: `url(${Sun}) !important`,
    backgroundPosition: '80% 48% !important',
    backgroundRepeat: 'no-repeat !important',
    opacity: '1 !important',
    borderRadius: 20,
    position: 'relative',
  },
  checked: {
    '&$switchBase': {
      color: '#185a9d',
      transform: 'translateX(32px)',
      '&:hover': {
        backgroundColor: 'rgba(24,90,257,0.08)',
      },
    },
    '& $thumb': {
      backgroundColor: '#fff',
    },
    '& + $track': {
      background: `${theme.palette.grey[800]} !important`,
      backgroundSize: '15px 25px !important',
      backgroundImage: `url(${Moon}) !important`,
      backgroundPosition: '25% 50% !important',
      backgroundRepeat: 'no-repeat !important',
    },
  },
}))(Switch);

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const currentTheme = useThemeMode();

  const toggleTheme = useCallback(() => {
    localStorage.setItem('themeType',
      localStorage.getItem('themeType') === 'dark' ? 'light' : 'dark');
  }, []);

  return (
    <header>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Talent
          </Typography>
          <Grid container alignItems="center" justify="flex-end" spacing={1}>
            <Grid item>
              <DarkModeSwitch onChange={toggleTheme as VoidFunction} checked={currentTheme === 'dark'} />
            </Grid>
            <Grid item>
              <Button
                color="inherit"
                href="/login"
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="inherit"
                href="/signup"
              >
                Join
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
