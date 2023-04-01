import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/posts" element={<Posts />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="/posts/:id" element={<PostIdPage />} exact />
        <Route path="/*" element={<Navigate to="/error" replace />} />
      </Routes>
    </div>
  );
}
