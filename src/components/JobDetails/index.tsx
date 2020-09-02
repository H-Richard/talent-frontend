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
    title, description, desirements, requirements, createdAt, expiresAt,
    updatedAt,
  } = post!;

  return (
    <Container style={{ marginTop: '90px' }} maxWidth="md">
      <CssBaseline>
        {/* HEADER */}
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h4">
              {title}
            </Typography>
          </Grid>
          <Button variant="contained" color="primary" size="medium">Apply For This Job</Button>
        </Grid>
        <Grid container justify="flex-start">
          <Grid item>
            <Typography variant="body2">
              Posted On:&nbsp;
              {createdAt.toDateString()}
            </Typography>
            <Typography variant="body2">
              Expires On:&nbsp;
              {expiresAt.toDateString()}
            </Typography>
            <Typography variant="body2">
              Last Updated:&nbsp;
              {updatedAt.toDateString()}
            </Typography>
          </Grid>
        </Grid>

        {/* BODY */}
        <Grid item>
          <br />
          <Typography variant="body2">{description}</Typography>
          <br />
          <Typography variant="body2"><b>Required Skills:</b></Typography>
          <Typography variant="body2">
            <ul>
              {requirements.map((item: string) => (
                <li>{item}</li>
              ))}
            </ul>
          </Typography>
          <br />
          <Typography variant="body2"><b>Desired Skills:</b></Typography>
          <Typography variant="body2">
            <ul>
              {desirements.map((item: string) => (
                <li>{item}</li>
              ))}
            </ul>
          </Typography>
        </Grid>
      </CssBaseline>
    </Container>
  );
};

const mapStateToProps = (state: RootState, { id } : Props): ConnectedProps => ({
  post: postDuck.selectors.post(state, id),
});

export default connect(mapStateToProps)(JobDetails);
