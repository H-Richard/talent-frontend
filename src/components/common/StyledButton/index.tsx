import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';

type Props = {
  text: string;
};

const StyledButton: FC<Props> = ({ text }: Props) => (
  <Button variant="contained" color="primary" startIcon={<CreateIcon />}>{text}</Button>
);

export default StyledButton;
