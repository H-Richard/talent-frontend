import React, { FC, ReactElement } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import StyledButton from '../../components/common/StyledButton';

const useStyles = makeStyles((theme: Theme) => createStyles({
  header: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
  subsection: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  section: {
    paddingBottom: theme.spacing(3),
  },
}));

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
  const newDate: Date = new Date(newDateStr);
  const dateTodayInMs: number = dateToday.valueOf() - (dateToday.valueOf() % 86400000);
  const newDateInMs: number = newDate.valueOf() - (newDate.valueOf() % 86400000);

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

const JobDetails: FC<JobProps> = ({ job }: JobProps): ReactElement => {
  const styles = useStyles();

  return (
    <Container fixed maxWidth="md">
      <Grid className={styles.header} container spacing={0}>
        <Grid item md={8}>
          <Typography className={styles.title} variant="h2">{job.title}</Typography>
          <StyledButton text="Apply now" />
        </Grid>
        <Grid item md={4}>
          <Typography variant="subtitle1">
            <Box fontWeight="fontWeightBold" display="inline">Posted </Box>
            {getDateDiff(job.createdAt)}
          </Typography>
          <Typography variant="subtitle1">
            <Box fontWeight="fontWeightBold" display="inline">Last updated </Box>
            {getDateDiff(job.updatedAt)}
          </Typography>
          <Typography variant="subtitle1">
            <Box fontWeight="fontWeightBold" display="inline">Expires </Box>
            {getDateDiff(job.expiresAt, true)}
          </Typography>
        </Grid>
      </Grid>
      <div className={styles.subsection}>
        <Typography className={styles.subsection} variant="h5">Description:</Typography>
        <Typography variant="body1">{job.description}</Typography>
      </div>
      <div className={styles.subsection}>
        <Typography className={styles.subsection} variant="h5">Requirements:</Typography>
        <Typography variant="body1">{job.requirements}</Typography>
      </div>
      <div className={styles.subsection}>
        <Typography className={styles.subsection} variant="h5">Nice to have:</Typography>
        <Typography variant="body1">{job.desirements}</Typography>
        <Typography variant="body1">{job.description}</Typography>
      </div>
    </Container>
  );
};

export default JobDetails;
