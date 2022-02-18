import React, { useState, useEffect } from 'react';
import Card from './card';
import Post from './types/post';
import ApiService from './services/api-service';
import { Container } from '@mui/material';
import { PaletteColorNames } from './types/theme-types';

const colorArr: PaletteColorNames[] = ['primary', 'secondary', 'error', 'info'];

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedPosts = await ApiService.getPosts();
      setPosts(fetchedPosts);
    })();
  }, []);

  return (
    <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }} maxWidth="xl">
      {posts.map(({ id, title, body }, i) => <Card
        key={id}
        title={title}
        text={body}
        bgcolor={colorArr[i % colorArr.length]}
      />)}
    </Container>
  );
};

export default App;


