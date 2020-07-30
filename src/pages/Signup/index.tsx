import React from 'react';
// import { Form, Field } from 'formik';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  formContainer: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Paper className={classes.formContainer} elevation={3}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  name="firstName"
                  type="firstName"
                  label="First Name"
                  variant="outlined"
                  autoComplete="off"
                  className={classes.input}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  name="lastName"
                  type="lastName"
                  label="Last Name"
                  variant="outlined"
                  autoComplete="lname"
                  className={classes.input}
                />
              </Grid>
            </Grid>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              autoComplete="off"
              className={classes.input}
            />
            <Field
              component={TextField}
              variant="outlined"
              name="password"
              type="password"
              label="Password"
              autoComplete="off"
              className={classes.input}
            />
            <Field
              component={TextField}
              variant="outlined"
              name="reenter_password"
              type="password"
              label="Re-enter Password"
              autoComplete="off"
              className={classes.input}
            /> */}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Grid>
          </form>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
}
