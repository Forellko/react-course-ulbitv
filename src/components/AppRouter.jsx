import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';

export default function AppRouter() {
  const isAuth = false;
  return (
    <div>
      <Routes>
        {isAuth
          ? privateRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.component}
                exact={route.exact}
              />
            ))
          : publicRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.component}
                exact={route.exact}
              />
            ))}
      </Routes>
    </div>
  );
}
