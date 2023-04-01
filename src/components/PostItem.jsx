import React from 'react';
import '../styles/PostItem.css';
import MyButton from './UI/button/MyButton';
export default function PostItem({ post, index, deletePost }) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id + '. ' + post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__buttons">
        <MyButton
          onClick={() => {
            deletePost(post.id);
          }}
        >
          Удалить
        </MyButton>
      </div>
    </div>
  );
}
