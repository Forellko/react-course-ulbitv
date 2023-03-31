import React from 'react';
import '../styles/PostItem.css';
export default function PostItem({ post, index, deletePost }) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{index + '. ' + post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__buttons">
        <button
          onClick={() => {
            deletePost(post.id);
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
