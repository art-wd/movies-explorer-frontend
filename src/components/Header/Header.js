import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { useRouteMatch } from 'react-router-dom';

function Header() {
  const isRootPath = useRouteMatch("/").isExact;

  return (
    <header className={`header${!isRootPath ? " header_logged" : ""}`}>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
