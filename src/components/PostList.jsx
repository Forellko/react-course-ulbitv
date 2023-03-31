import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

export default function PostList({ posts, deletePost }) {
  if (!posts.length)
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>;

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Список постов</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} classNames="post" timeout={500}>
            <PostItem index={index + 1} post={post} deletePost={deletePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
