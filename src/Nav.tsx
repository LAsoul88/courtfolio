import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Nav.scss';

const Nav = () => {
  return (
    <header>
      <img src="" alt="logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button>Resume</button>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;