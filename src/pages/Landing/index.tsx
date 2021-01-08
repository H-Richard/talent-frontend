import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  Container,
  CssBaseline,
  makeStyles,
  Typography,
  Grid,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import useWindowDimensions from '../../utils/window-size';
import { RootState } from '../../app/types';
import { Post } from '../../app/modular/post/types';
import PostCard from '../../components/common/PostCard';
import CustomParticles from '../../components/common/CustomParticles';

import postDuck from '../../app/modular/post';

const useStyles = makeStyles(() => ({
  pagination: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: '110px',
  },
}));

interface ConnectedProps {
  posts: Post[]
}

type Props = ConnectedProps;

const Landing: React.FC<Props> = ({ posts }: Props) => {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  let itemsPerPage = 7;
  if (height < 800) {
    itemsPerPage = 4;
  }
  const [page, setPage] = useState(1);
  const numOfPages = Math.ceil(posts.length / itemsPerPage);

  const handleChange = (event: any, value: number) => {
    setPage(value);
  };

  return (
    <CssBaseline>
      <CustomParticles />
      <Container maxWidth="md">
        <Grid container direction="column" spacing={4}>
          <Grid style={{ marginTop: '90px' }} item>
            <Typography variant="h4" style={{ fontWeight: 500 }}>Open Positions</Typography>
          </Grid>
          {posts.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((post) => (
            post.active ? <PostCard key={post.id} post={post} /> : <div />
          ))}
        </Grid>
      </Container>
      <div className={classes.pagination}>
        <Pagination
          count={numOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
        />
      </div>
    </CssBaseline>
  );
};

const mapStateToProps = (state: RootState): Props => ({
  posts: postDuck.selectors.posts(state),
});

export default compose<React.FC>(connect(mapStateToProps, null))(Landing);
