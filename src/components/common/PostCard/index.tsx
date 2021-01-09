import {
  CssBaseline,
  Typography,
  Button,
  Grid,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Post } from '../../../app/modular/post/types';

interface Props {
  post: Post
}

function PostCard(props: Props) {
  const { post } = props;
  const { title, author } = post;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/post/${post.id}`);
  };

  return (
    <Grid item>
      <CssBaseline>
        <Grid container direction="row" justify="flex-end" alignItems="flex-start">
          <Grid item container direction="column" xs={9} sm={11}>
            <Typography variant="h5" style={{ fontWeight: 500 }}>{title}</Typography>
            <Typography variant="overline" style={{ opacity: '60%' }}>
              {`${author.firstName} ${author.lastName}`}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={1}>
            <Button onClick={handleClick} size="small" variant="contained" color="primary" style={{ width: '90px' }}>
              Apply
            </Button>
          </Grid>
        </Grid>
      </CssBaseline>
    </Grid>
  );
}

export default PostCard;
