import React from 'react';
import { connect } from 'react-redux';
import AuthLoadingModal from './AuthLoadingModal';
import { RootState } from '../../app/types';
import authDuck from '../../app/modular/auth';

interface ConnectedProps {
  authLoadingModalVisible: boolean
}

const Modals: React.FC<ConnectedProps> = ({
  authLoadingModalVisible,
}: ConnectedProps) => (
  <>
    {(authLoadingModalVisible && <AuthLoadingModal />)}
  </>
);

const mapStateToProps = (state: RootState): ConnectedProps => ({
  authLoadingModalVisible: authDuck.selectors.loading(state),
});

export default connect(mapStateToProps)(Modals);
