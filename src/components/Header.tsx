import React from 'react';
import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid'

interface ToggleMode {
  ClickHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const DarkModeSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 1,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.grey[500],
          border: 'none',
        },
      },
    },
    thumb: {
      width: 24,
      height: 24,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[400]}`,
      borderRadius: 26 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }),
)(Switch);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (Props: ToggleMode) => {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                  Talent
              </Typography>
              <Typography>
                <Grid container alignItems="center" justify="flex-end" spacing={1}>
                  <Grid item>Dark Mode</Grid>
                  <Grid item>
                    <DarkModeSwitch onChange={Props.ClickHandler}/>
                  </Grid>
                  <Grid item>
                    <Button color="inherit" href="/login"
                      >Login
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="inherit" href="/signup"
                      >Join
                    </Button>
                  </Grid>
                </Grid>
              </Typography>
            </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header;