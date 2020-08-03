import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';

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

const getDateDiff = (newDateStr: string, isExpiryDate: boolean = false): string => {
  const dateToday: Date = new Date();
  const dateTodayInMs: number = dateToday.valueOf() - (dateToday.valueOf() % 86400000);
  const newDateInMs: number = new Date(newDateStr).valueOf();

  const prefix: string = (isExpiryDate) ? 'in ' : '';
  const suffix: string = (isExpiryDate) ? '' : ' ago';

  const millisecondsDiff: number = Math.abs(newDateInMs - dateTodayInMs);
  const daysDiff: number = Math.ceil(millisecondsDiff / 86400000);

  let returnString: string;
  if (daysDiff < 1) {
    returnString = 'today';
  } else if (daysDiff === 1) {
    returnString = (isExpiryDate) ? 'tomorrow' : 'yesterday';
  } else {
    returnString = `${prefix}${daysDiff} days${suffix}`;
  }

  return returnString;
};

const JobDetails: FC<JobProps> = ({ job }: JobProps) => (
  <Container fixed maxWidth="md">
    <Grid container spacing={0}>
      <Grid item md={8}>
        <Typography variant="h2">{job.title}</Typography>
      </Grid>
      <Grid item md={4}>
        <Typography variant="h6">{`Posted ${getDateDiff('2020-07-19')}`}</Typography>
        <Typography variant="h6">{`Last updated ${getDateDiff(job.updatedAt)}`}</Typography>
        <Typography variant="h6">{`Expires ${getDateDiff(job.expiresAt, true)}`}</Typography>
      </Grid>
    </Grid>
  </Container>
);

export default JobDetails;
