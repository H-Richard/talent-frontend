import React from 'react';
import { Typography } from '@material-ui/core';

import { connect } from 'react-redux';
import Container from '../container';
import { RootState } from '../../../app/types';

import authDuck from '../../../app/modular/auth';

interface ConnectedProps {
  loading: boolean;
}

type Props = ConnectedProps;

const AuthLoadingModal: React.FC<Props> = ({
  loading,
}: Props) => (
  <Container
    open={loading}
  >
    <Typography>
      Loading!
    </Typography>
  </Container>
);

const mapStateToProps = (state: RootState): Props => ({
  loading: authDuck.selectors.loading(state),
});

export default connect(mapStateToProps)(AuthLoadingModal);
