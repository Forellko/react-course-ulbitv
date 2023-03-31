import React from 'react';
import PostItem from './PostItem';

export default function PostList({ posts, deletePost }) {
  if (!posts.length)
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>;

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Список постов</h1>
      {posts.map((post, index) => (
        <PostItem
          index={index + 1}
          post={post}
          key={post.id}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}
