import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <>
      <nav className="links">
        <Link to="/react" className="link">
          React
        </Link>
        <Link to="/javascript" className="link">
          JavaScript
        </Link>
        <Link to="/html" className="link">
          HTML
        </Link>
        <Link to="/css" className="link">
          CSS
        </Link>
      </nav>
    </>
  );
};

export default Links;
