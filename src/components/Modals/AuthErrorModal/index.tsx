import React from 'react';
import { Typography } from '@material-ui/core';

import { connect } from 'react-redux';
import Container from '../container';
import { RootState } from '../../../app/types';

import authDuck from '../../../app/modular/auth';

interface ConnectedProps {
    loading: boolean;
    errMsg: String;
}

type Props = ConnectedProps;

const AuthErrorModal: React.FC<Props> = ({
    loading, errMsg
}: Props) => (
        <Container
            open={!loading}
        >
            <Typography>
                {errMsg}
            </Typography>
        </Container>
    );

const mapStateToProps = (state: RootState): Props => ({
    errMsg: authDuck.selectors.errMsg(state),
    loading: authDuck.selectors.loading(state),
});

export default connect(mapStateToProps)(AuthErrorModal);