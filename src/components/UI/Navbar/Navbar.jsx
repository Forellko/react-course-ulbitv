import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <div className="navbar">
      <MyButton onClick={() => setIsAuth(false)}>Выйти</MyButton>
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
}
