import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Nav';

const Nav = () => {
  const resume = require('./util/Courtney_Kakebeen_Full_Stack_Engineer.docx');

  return (
    <header>
      <img src="" alt="logo" />
      <nav>
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><Link to="/projects" className="link">Projects</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
          <a 
            href={resume} download 
            target="_blank"
          >Resume</a>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;