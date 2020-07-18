import React from 'react';
import {
  Field, FormikProps, Form, withFormik,
} from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { TextField } from 'formik-material-ui';
import {
  Container,
  CssBaseline,
  makeStyles,
  Avatar,
  Typography,
  Button,
  Paper,
  Grid,
  Link,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import * as yup from 'yup';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import authDuck from '../../app/modular/auth';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(9),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    alignItems: 'center',
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

interface ConnectedActions {
  login: typeof authDuck.actions.login;
}

interface FormValues {
  email: string;
  password: string;
}

type Props = ConnectedActions & FormikProps<FormValues> & RouteComponentProps;

const LoginPage: React.FC<Props> = ({ handleSubmit }: Props) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Paper className={classes.formContainer} elevation={3}>
            <Form onSubmit={handleSubmit} className={classes.form}>
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </Form>
            <Grid container>
              <Grid item xs>
                <Link href="/recover" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </CssBaseline>
    </Container>
  );
};

const mapPropsToDispatch = {
  login: authDuck.actions.login,
};

const enhanceForm = withFormik({
  validateOnMount: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: yup.object().shape({
    email: yup.string().min(1).required('Enter your email.'),
    password: yup.string().min(1).required('Enter your password.'),
  }),
  handleSubmit: (
    values: FormValues,
    { props: { login } }: { props: Props },
  ) => {
    login({ email: values.email, password: values.password, callback() { window.location.href = '/home'; } });
  },
  displayName: 'login',
});

export default compose<React.FC>(
  connect(null, mapPropsToDispatch),
  enhanceForm,
  withRouter,
)(LoginPage);
