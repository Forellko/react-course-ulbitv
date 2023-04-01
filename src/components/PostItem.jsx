import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PostItem.css';
import MyButton from './UI/button/MyButton';
export default function PostItem({ post, index, deletePost }) {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id + '. ' + post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton
          onClick={() => {
            navigate(`/posts/${post.id}`);
          }}
        >
          Открыть
        </MyButton>
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
