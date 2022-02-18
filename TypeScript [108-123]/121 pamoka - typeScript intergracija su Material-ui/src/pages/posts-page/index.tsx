import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Card from './card';
import Post from '../../types/post';
import ApiService from '../../services/api-service';
import { PaletteColorNames } from '../../theme/theme-types';

const colorArr: PaletteColorNames[] = ['twitter', 'info', 'facebook'];

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedPosts = await ApiService.getPosts();
      setPosts(fetchedPosts);
    })();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {posts.map(({ id, title, body }, i) => <Card
        key={id}
        title={title}
        text={body}
        bgcolor={colorArr[i % colorArr.length]}
      />)}
    </Box>
  );
};

export default PostsPage;
