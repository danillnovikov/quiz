import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/react">React</Link>
        <Link to="/javascript">JS</Link>
        <Link to="/html">HTML</Link>
        <Link to="/css">CSS</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
