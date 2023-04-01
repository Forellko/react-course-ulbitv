import React from 'react';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';

export default function AppRouter() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        {isAuth
          ? privateRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
                exact={route.exact}
              />
            ))
          : publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
                exact={route.exact}
              />
            ))}
      </Routes>
    </div>
  );
}
