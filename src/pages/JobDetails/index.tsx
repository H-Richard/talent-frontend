import React, { FC } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Divider,
  Button,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import StyledButton from '../../components/common/StyledButton';

const useStyles = makeStyles((theme: Theme) => createStyles({
  header: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(3),
  },
  applyButton: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  subsection: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
  subsectionTitle: {
    paddingBottom: theme.spacing(1),
  },
  list: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
  footer: {
    paddingBottom: theme.spacing(10),
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

const JobDetails: FC<JobProps> = ({ job }: JobProps) => {
  const styles = useStyles();

  return (
    <>
      <Container fixed maxWidth="md">
        <Grid className={styles.header} container spacing={0}>
          <Grid item md={9}>
            <Typography variant="h2">{job.title}</Typography>
            <div className={styles.applyButton}>
              {job.active ? <StyledButton text="Apply now" /> : <Button variant="contained" disabled>Expired</Button> }
            </div>
          </Grid>
          <Grid item md={3}>
            <Typography variant="subtitle1">
              <Box fontWeight="fontWeightBold" display="inline">Posted </Box>
              {new Date(job.createdAt).toDateString()}
            </Typography>
            <Typography variant="subtitle1">
              <Box fontWeight="fontWeightBold" display="inline">Last updated </Box>
              {new Date(job.updatedAt).toDateString()}
            </Typography>
            {job.active && (
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold" display="inline">Expires </Box>
                {new Date(job.expiresAt).toDateString()}
              </Typography>
            )}
          </Grid>
          <Typography variant="subtitle1">
            <Box fontWeight="fontWeightBold" display="inline">Posted by: </Box>
            {job.author.firstName}
            {' '}
            {job.author.lastName}
            {' - '}
            {job.author.email}
          </Typography>
        </Grid>
      </Container>

      <Divider />

      <Container fixed maxWidth="md">
        <div className={styles.subsection}>
          <Typography className={styles.subsectionTitle} variant="h5">Description</Typography>
          <Typography variant="subtitle1">{job.description}</Typography>
        </div>

        <Grid className={styles.footer} container spacing={10}>
          <Grid item md={6}>
            <div className={styles.subsection}>
              <Typography className={styles.subsectionTitle} variant="h5">Requirements</Typography>
              <ul className={styles.list}>
                {job.requirements.map((requirement) => (
                  <li key={requirement}>
                    <Typography variant="subtitle1">{requirement}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>

          <Grid item md={6}>
            <div className={styles.subsection}>
              <Typography className={styles.subsectionTitle} variant="h5">Nice to have</Typography>
              <ul className={styles.list}>
                {job.desirements.map((desirement) => (
                  <li key={desirement}>
                    <Typography variant="subtitle1">{desirement}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default JobDetails;
