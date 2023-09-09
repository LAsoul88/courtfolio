import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Nav from './Nav';
import Home from './Home';

import './styles/style.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Nav />
    <Home />
  </StrictMode>,
);