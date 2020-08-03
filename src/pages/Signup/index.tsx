import React from 'react';
import {
  Form, FormikProps, Field, withFormik,
} from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { TextField } from 'formik-material-ui';
import {
  Avatar,
  Button,
  CssBaseline,
  Link,
  Grid,
  Typography,
  Container,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as Yup from 'yup';
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
  signup: typeof authDuck.actions.signup;
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  reenter_password: string;
}

type Props = ConnectedActions & FormikProps<FormValues> & RouteComponentProps;
const Signup: React.FC<Props> = ({ handleSubmit }: Props) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Paper className={classes.formContainer} elevation={3}>
            <Form onSubmit={handleSubmit} className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
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
                    autoComplete="off"
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
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Form>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
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
  signup: authDuck.actions.signup,
};

const enhanceForm = withFormik({
  validateOnMount: true,
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    reenter_password: '',
  }),
  validationSchema: Yup.object().shape({
    firstName: Yup.string().min(1).required('First Name is required'),
    lastName: Yup.string().min(1).required('Last Name is required'),
    email: Yup.string().min(1).required('Enter your email').email('Enter a valid email'),
    password: Yup.string().min(8, 'Password must contain at least 8 characters').required('Enter your password'),
    reenter_password: Yup.string().required('Confirm your password').oneOf([Yup.ref('password')], 'Password does not match'),
  }),
  handleSubmit: (
    values: FormValues,
    { props: { signup }, setSubmitting, setFieldValue }:
    { props: Props, setSubmitting: Function, setFieldValue: Function },
  ) => {
    signup({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      onSignupSuccess() { setSubmitting(false); window.location.href = '/home'; },
      onSignupFailure() { setSubmitting(false); setFieldValue('email', '', false); },
    });
  },
  displayName: 'signup',
});

export default compose<React.FC>(
  connect(null, mapPropsToDispatch),
  enhanceForm,
  withRouter,
)(Signup);
