import React from 'react';
import { connect } from 'react-redux';
import AuthLoadingModal from './AuthLoadingModal';
import { RootState } from '../../app/types';
import authDuck from '../../app/modular/auth';
import AuthErrorModal from './AuthErrorModal';

interface ConnectedProps {
  authLoadingModalVisible: boolean,
  error?: string
}

const Modals: React.FC<ConnectedProps> = ({
  authLoadingModalVisible, error,
}: ConnectedProps) => (
  <>
    {(authLoadingModalVisible && <AuthLoadingModal />) || (error && <AuthErrorModal />)}
  </>
);

const mapStateToProps = (state: RootState): ConnectedProps => ({
  authLoadingModalVisible: authDuck.selectors.loading(state),
  error: authDuck.selectors.error(state),
});

export default connect(mapStateToProps)(Modals);
