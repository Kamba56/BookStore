import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Book Store</h1>
    <nav>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>

    <div className="avatar" />
  </header>
);

export default Header;
