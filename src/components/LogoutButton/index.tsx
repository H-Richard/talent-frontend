import React, { MouseEvent } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { clearCurrentUser } from '../../client/user';
import { clearJWT } from '../../client/jwt';

const LogoutButton = () => {
  const history = useHistory();

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    history.push('/');

    clearCurrentUser();
    clearJWT();
  };

  return (
    <Button onClick={handleClick} color="inherit">Logout</Button>
  );
};

export default LogoutButton;
