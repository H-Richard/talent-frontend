import React, { FC } from 'react';
import { FormControlState } from '@material-ui/core';

const sampleJob = {
  active: 'true',
  author: {
    email: 'executive@gmail.com',
    executive: true,
    firstName: 'Executive',
    lastName: 'Doe',
    updatedAt: '2020-07-19T19:04:41.192603Z',
  },
  createdAt: '2020-07-19T19:04:41.199761Z',
  description: 'Market Things',
  desirements: ['Skills', 'Youtube'],
  expiresAt: '2020-07-19T19:04:41.199659Z',
  id: 2,
  requirements: ['Instagram', 'Facebook'],
  title: 'VP of Marketing',
  updatedAt: '2020-07-19T19:04:41.199761Z',
};

type JobProps = {
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
};

const JobDetails: FC<JobProps> = (details: JobProps) => (
  <>
    <h1>{details.title}</h1>
  </>
);

export default JobDetails;
