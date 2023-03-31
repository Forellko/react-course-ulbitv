import React from 'react';
import PostItem from './PostItem';

export default function PostList({ posts }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Список постов</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}
