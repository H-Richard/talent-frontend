import React from 'react';
import {
  Container,
  Button,
  Typography,
  Grid,
  CssBaseline,
} from '@material-ui/core';
import { User } from '../../app/modular/auth/types';

type Props = {
  post: {
    id: number,
    title: string,
    author: User

    createdAt: Date,
    expiresAt: Date,
    active: boolean,

    description: string,
    requirements: Array<string>,
    desirements: Array<string>,
  }
};
const stuff = {
  active: 'true',
  author: {
    email: 'executive@gmail.com',
    executive: true,
    firstName: 'Executive',
    lastName: 'Doe',
    updatedAt: '2020-07-19T19:04:41.192603Z',
  },
  createdAt: '2020-07-19T19:04:41.199761Z',
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
  expiresAt: '2020-07-19T19:04:41.199659Z',
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
  updatedAt: '2020-07-19T19:04:41.199761Z',
};

const JobDetails: React.FC = () => {
  const toBullets = (item: string) => (
    <li>{item}</li>
  );

  const top = (
    <Grid container justify="center">
      <Grid item xs={7}>
        <Typography variant="h3">
          {stuff.title}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Grid container justify="flex-end">
          <Button variant="contained" color="primary" size="large">Apply For This Job</Button>
        </Grid>
      </Grid>
    </Grid>
  );

  const bot = (
    <Grid container justify="center">
      <Grid item xs={10}>
        <br />
        <Typography variant="h6">Job Description:</Typography>
        <Typography variant="body1">{stuff.description}</Typography>
        <br />
        <Typography variant="h6">Required Skills:</Typography>
        <Typography variant="body1"><ul>{stuff.requirements.map(toBullets)}</ul></Typography>
        <br />
        <Typography variant="h6">Desired Skills:</Typography>
        <Typography variant="body1"><ul>{stuff.desirements.map(toBullets)}</ul></Typography>
      </Grid>
    </Grid>
  );

  return (
    <Container style={{ marginTop: '70px' }} maxWidth="md">
      <CssBaseline>
        {top}
        {bot}
      </CssBaseline>
    </Container>
  );
};

export default JobDetails;
