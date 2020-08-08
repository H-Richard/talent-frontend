import React from 'react';
import { Typography, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import Container from '../container';
import { RootState } from '../../../app/types';

import authDuck from '../../../app/modular/auth';

interface ConnectedProps {
  loading: boolean;
}

type Props = ConnectedProps;

const useStyles = makeStyles((theme) => ({
  paper: {
    outline: 'none',
  },
  linearProgress: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  loading: {
    marginTop: theme.spacing(1),
  },
}));

const AuthLoadingModal: React.FC<Props> = ({
  loading,
}: Props) => {
  const classes = useStyles();
  return (
    <Container
      open={loading}
      className={classes.paper}
    >
      <LinearProgress className={classes.linearProgress} color="secondary" />
      <Typography className={classes.loading}>
        Loading...
      </Typography>
    </Container>
  );
};

const mapStateToProps = (state: RootState): Props => ({
  loading: authDuck.selectors.loading(state),
});

export default connect(mapStateToProps)(AuthLoadingModal);
