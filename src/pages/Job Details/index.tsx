import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

type JobProps = {
  job: {
    active: boolean;
    author: {
      email: string;
      executive: boolean;
      firstName: string;
      lastName: string;
      updatedAt: string;
    };
    createdAt: string;
    description: string;
    desirements: string[];
    expiresAt: string;
    id: number;
    requirements: string[];
    title: string;
    updatedAt: string;
  }
};

const parseDate = (date: string): string => {
  const parsedDate: Date = new Date(Date.parse(date));
  return parsedDate.toDateString();
};

const JobDetails: FC<JobProps> = ({ job }: JobProps) => (
  <Container fixed maxWidth="md">
    <Grid container spacing={0}>
      <Grid item md={8}>
        <Typography variant="h2">{job.title}</Typography>
      </Grid>
      <Grid item md={4}>
        <Typography variant="h6">Posted: {parseDate(job.createdAt)}</Typography>
        <Typography variant="h6">Last updated: {parseDate(job.updatedAt)}</Typography>
        <Typography variant="h6">Expires: {parseDate(job.expiresAt)}</Typography>
      </Grid>
    </Grid>
  </Container>
);

export default JobDetails;
