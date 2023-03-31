import React from 'react';

export default function PostItem() {
  return (
    <div className="post">
      <div className="post__content">
        <strong>1. Javascript</strong>
        <div>Javascript - Язык программирования</div>
      </div>
      <div className="post__buttons">
        <button>Удалить</button>
      </div>
    </div>
  );
}
