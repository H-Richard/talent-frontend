import React, { useCallback } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import authDuck from '../../app/modular/auth';

interface ConnectedActions {
  logout: typeof authDuck.actions.logout;
}

type Props = ConnectedActions;

const LogoutButton: React.FC<Props> = ({ logout }: Props) => {
  const history = useHistory();

  const handleClick = useCallback((): void => {
    history.push('/');
    logout();
  }, [history]);

  return (
    <Button onClick={handleClick} color="inherit">Logout</Button>
  );
};

const mapPropsToDispatch = {
  logout: authDuck.actions.logout,
};

export default compose<React.FC>(
  connect(null, mapPropsToDispatch),
)(LogoutButton);
