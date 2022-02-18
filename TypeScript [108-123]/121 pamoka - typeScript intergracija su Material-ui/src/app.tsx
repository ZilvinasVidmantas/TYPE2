import React, { useState, useEffect } from 'react';
import Card from './card';
import Post from './types/post';
import ApiService from './services/api-service';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedPosts = await ApiService.getPosts();
      setPosts(fetchedPosts);
    })();
  }, []);

  return (
    <div>
      {posts.map(({ id, title, body }) => <Card key={id} title={title} text={body} />)}
    </div>
  );
};

export default App;
