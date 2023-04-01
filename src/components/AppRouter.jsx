import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../router';

export default function AppRouter() {
  return (
    <div>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} />
        ))}
        <Route path="/*" element={<Navigate to="/posts" replace />} />
      </Routes>
    </div>
  );
}
