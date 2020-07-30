import React from 'react';
import { Typography, Icon, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import { connect } from 'react-redux';
import Container from '../container';
import { RootState } from '../../../app/types';

import authDuck from '../../../app/modular/auth';

interface ConnectedProps {
  error?: string;
}

interface ConnectedActions {
  clearError: typeof authDuck.actions.clearError;
}

type Props = ConnectedProps & ConnectedActions;

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 200,
    maxHeight: 800,
    minWidth: 300,
    maxWidth: 800,
    padding: 0,
    outline: 'none',
  },

  errorImageContainer: {
    minHeight: 90,
    maxHeight: 400,
    backgroundColor:
      theme.palette.error.main,
    borderRadius: '4px 4px 0 0',
    textAlign: 'center',
  },
  errorMessageContainer: {
    minHeight: 110,
    maxHeight: 400,
    backgroundColor:
      theme.palette.error.contrastText,
    borderRadius: '0 0 4px 4px',
    textAlign: 'center',
    padding: 10,
  },
  closeIcon: {
    float: 'right',
    verticalAlign: 'top',
    fontSize: '15px',
    color:
      theme.palette.background.default,
    margin: '8px 8px',
  },
  errorIcon: {
    color:
      theme.palette.error.contrastText,
    fontSize: '70px',
    marginTop: 10,
    marginLeft: 30,
  },
}));

const AuthErrorModal: React.FC<Props> = ({
  error, clearError,
}: Props) => {
  const classes = useStyles();

  return (
    <Container
      className={classes.paper}
      open
      handleClose={clearError}
    >
      <Paper className={classes.errorImageContainer}>
        <CancelOutlinedIcon className={classes.errorIcon} />
        <Icon onClick={clearError} className={classes.closeIcon}>close</Icon>
      </Paper>
      <Paper className={classes.errorMessageContainer}>
        <Typography variant="h5" style={{ opacity: '87%' }}>
          Oops!
        </Typography>
        <Typography variant="body2" style={{ opacity: '60%' }}>
          {error}
        </Typography>
      </Paper>
    </Container>
  );
};

const mapStateToProps = (state: RootState): ConnectedProps => ({
  error: authDuck.selectors.error(state),
});

const mapDispatchToProps: ConnectedActions = {
  clearError: authDuck.actions.clearError,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthErrorModal);
