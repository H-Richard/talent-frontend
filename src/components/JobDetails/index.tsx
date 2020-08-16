import React from 'react';
import {
  Container,
  Button,
  Typography,
  Grid,
  CssBaseline,
} from '@material-ui/core';
import { Post } from '../../app/modular/post/types';

interface ConnectedProps {
  post?: Post
}

interface UnconnectedProps {
  id: number
}

type Props = ConnectedProps & UnconnectedProps;

const mock: Post = {
  active: 'true',
  author: {
    email: 'executive@gmail.com',
    executive: true,
    firstName: 'Executive',
    lastName: 'Doe',
    updatedAt: new Date('2020-07-19T19:04:41.192603Z'),
  },
  createdAt: new Date('2020-07-19T19:04:41.199761Z'),
  description: 'Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things Market Things   ',
  desirements: [
    'Skills Skills Skills Skills Skills Skills Skills Skills ',
    'Youtube Youtube Youtube Youtube Youtube Youtube Youtube Youtube ',
    'Skills Skills Skills Skills Skills Skills Skills Skills ',
    'Youtube Youtube Youtube Youtube Youtube Youtube Youtube Youtube ',
    'Skills Skills Skills Skills Skills Skills Skills Skills ',
    'Youtube Youtube Youtube Youtube Youtube Youtube Youtube Youtube ',
    'Skills Skills Skills Skills Skills Skills Skills Skills ',
    'Youtube Youtube Youtube Youtube Youtube Youtube Youtube Youtube ',
  ],
  expiresAt: new Date('2020-07-19T19:04:41.199659Z'),
  id: 2,
  requirements: [
    'Instagram Instagram Instagram Instagram Instagram Instagram Instagram Instagram ',
    'Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook ',
    'Instagram Instagram Instagram Instagram Instagram Instagram Instagram Instagram ',
    'Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook ',
    'Instagram Instagram Instagram Instagram Instagram Instagram Instagram Instagram ',
    'Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook Facebook ',
  ],
  title: 'VP of Marketing',
  updatedAt: new Date('2020-07-19T19:04:41.199761Z'),
};

const JobDetails: React.FC<Props> = ({
  post = mock,
}: Props) => {
  const {
    title, description, desirements, requirements,
  } = post;

  const jobDetailsHeader = (
    <Grid container justify="center">
      <Grid item xs={7}>
        <Typography variant="h3">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Grid container justify="flex-end">
          <Button variant="contained" color="primary" size="large">Apply For This Job</Button>
        </Grid>
      </Grid>
    </Grid>
  );

  const jobDetailsBody = (
    <Grid container justify="center">
      <Grid item xs={10}>
        <br />
        <Typography variant="h6">Job Description:</Typography>
        <Typography variant="body1">{description}</Typography>
        <br />
        <Typography variant="h6">Required Skills:</Typography>
        <Typography variant="body1">
          <ul>
            {requirements.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
        </Typography>
        <br />
        <Typography variant="h6">Desired Skills:</Typography>
        <Typography variant="body1">
          <ul>
            {desirements.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
        </Typography>
      </Grid>
    </Grid>
  );

  return (
    <Container style={{ marginTop: '90px' }} maxWidth="md">
      <CssBaseline>
        {jobDetailsHeader}
        {jobDetailsBody}
      </CssBaseline>
    </Container>
  );
};

export default JobDetails;
