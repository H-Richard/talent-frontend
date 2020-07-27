import React from 'react';
import {
  makeStyles, Modal, Backdrop, Fade, Paper,
} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[8],
    padding: theme.spacing(2, 4, 3),
  },
}));

interface Props {
  handleClose?: VoidFunction;
  children: React.ReactNode;
  open: boolean;
  className?: string;
}

const Container: React.FC<Props> = ({
  handleClose,
  children,
  open,
  className,
}: Props) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={className ? `${classes.modal} ${className}` : classes.modal}
      onClose={handleClose}
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade
        in={open}
      >
        <Paper className={classes.paper}>
          {children}
        </Paper>
      </Fade>
    </Modal>
  );
};

export default Container;
