import React, { useState, useEffect } from 'react';
import Card from './card';
import Post from './types/post';
import ApiService from './services/api-service';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedPosts = await ApiService.getPosts();
      setPosts(posts);
    })();
  }, []);

  return (
    <div>
    </div>
  );
};

export default App;
