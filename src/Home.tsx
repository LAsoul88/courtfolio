import React from 'react';

import { GitHub, LinkedIn } from './images/images';

import './styles/Home.scss';

const Home = () => {
  return (
    <>
      <h1></h1>
      <main>
        <section className="greeting">
          <p className="hello">Hello</p>
          <p className="">I'm Courtney Kakebeen</p>
          <p></p>
        </section>
        <section className="links">
          <a href="https://github.com/LAsoul88" target="_blank"><GitHub fill="black" /></a>
          <a href="https://www.linkedin.com/in/courtneykakebeen/" target="_blank"><LinkedIn fill="black"
          /></a>
        </section>
      </main>
    </>
  );
}

export default Home;