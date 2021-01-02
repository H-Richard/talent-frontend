import React from 'react';

import {
  Container,
  Button,
  Typography,
  Grid,
  CssBaseline,
} from '@material-ui/core';
import { connect } from 'react-redux';
import postDuck from '../../app/modular/post';
import { RootState } from '../../app/types';
import { Post } from '../../app/modular/post/types';

import calculateRelativeTime from '../../utils/relative-time';

interface ConnectedProps {
  post?: Post
}

interface UnconnectedProps {
  id: number
}

type Props = ConnectedProps & UnconnectedProps;

const JobDetails: React.FC<Props> = ({
  post,
}: Props) => {
  if (!post) {
    return <>404</>;
  }
  const {
    title, description, desirements, requirements, createdAt,
  } = post!;

  return (
    <Container style={{ marginTop: '90px' }} maxWidth="md">
      <CssBaseline>
        {/* HEADER */}
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h2">
              {title}
            </Typography>
          </Grid>
          <Button variant="contained" color="primary" size="medium" style={{ height: '40px' }}>Apply For This Job</Button>
        </Grid>
        <Grid container justify="flex-start">
          <Grid item>
            <Typography variant="body1" style={{ opacity: '60%' }}>
              {calculateRelativeTime(createdAt)}
            </Typography>
          </Grid>
        </Grid>

        {/* BODY */}
        <Grid item>
          <br />
          <Typography variant="h5">About the job</Typography>
          <br />
          <Typography variant="body1">{description}</Typography>
          <br />
          <br />
          <Typography variant="body1"><b>Required Skills:</b></Typography>
          <ul>
            {requirements.map((item: string) => (
              <li key={item}><Typography variant="body1">{item}</Typography></li>
            ))}
          </ul>
          <br />
          <br />
          <Typography variant="body1"><b>Desired Skills:</b></Typography>
          <ul>
            {desirements.map((item: string) => (
              <li key={item}><Typography variant="body1">{item}</Typography></li>
            ))}
          </ul>
        </Grid>
      </CssBaseline>
    </Container>
  );
};

const mapStateToProps = (state: RootState, { id }: Props): ConnectedProps => ({
  post: postDuck.selectors.post(state, id),
});

export default connect(mapStateToProps)(JobDetails);
