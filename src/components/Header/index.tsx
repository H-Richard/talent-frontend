import React from 'react';
import {
  makeStyles, withStyles, createStyles, Theme,
} from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button, Switch, Grid,
} from '@material-ui/core';
import Moon from './img/moon.png';
import Sun from './img/sun.png';

interface Props {
  toggleTheme: (arg0: React.ChangeEvent<HTMLInputElement>) => void
}

const DarkModeSwitch = withStyles((theme: Theme) => createStyles({
  root: {
    width: 80,
    height: 48,
    padding: 10,
  },
  switchBase: {
    padding: 9,
    color: '#ff6a00',
  },
  thumb: {
    width: 30,
    height: 30,
    backgroundColor: theme.palette.common.white,
    border: 'solid',
    borderColor: theme.palette.grey[800],
  },
  track: {
    backgroundSize: '30px 28px',
    backgroundColor: theme.palette.common.white,
    backgroundImage: `url(${Sun})`,
    opacity: '1 !important',
    borderRadius: 20,
    position: 'relative',
  },
  checked: {
    '&$switchBase': {
      padding: 9,
      color: '#185a9d',
      transform: 'translateX(32px)',
      '&:hover': {
        backgroundColor: 'rgba(24,90,257,0.08)',
      },
    },
    '& $thumb': {
      backgroundColor: theme.palette.common.white,
      border: 'solid',
      borderColor: theme.palette.grey[800],
    },
    '& + $track': {
      backgroundSize: '34px 28px',
      backgroundImage: `url(${Moon})`,
    },
  },
}))(Switch);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: theme.palette.common.white,
  },
}));

const Header: React.FC<Props> = ({ toggleTheme }: Props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Talent
          </Typography>
          <Typography>
            <Grid container alignItems="center" justify="flex-end" spacing={1}>
              <Grid item>
                <DarkModeSwitch onChange={toggleTheme} />
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
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
