import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { clearCurrentUser } from '../../client/user';
import { clearJWT } from '../../client/jwt';

const LogoutButton: React.FC = () => {
  const history = useHistory();

  const handleClick = useCallback((): void => {
    history.push('/');

    clearCurrentUser();
    clearJWT();
  }, [history]);

  return (
    <Button onClick={handleClick} color="inherit">Logout</Button>
  );
};

export default LogoutButton;
