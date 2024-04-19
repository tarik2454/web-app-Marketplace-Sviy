import { API, setToken } from '@/config/config';
import React, { useEffect, useState } from 'react';

type PostProps = {
  id: number;
  title: string;
};

const MyComponent = () => {
  const [data, setData] = useState<PostProps[]>([]);

  useEffect(() => {
    API.get('posts')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
