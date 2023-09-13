import React, { useState, useRef, MouseEvent } from 'react';

import { GitHub, LinkedIn } from './images/images';

import './styles/Home.scss';

const Home = () => {
  const [liHover, setLiHover] = useState(false);
  const [gitHover, setGitHover] = useState(false);

  const liRef = useRef(null);
  const gitRef = useRef();

  const toggleHover = ({ target, currentTarget }: MouseEvent<HTMLAnchorElement>): void => {
    console.log(target)
  }

  return (
    <>
      <h1></h1>
      <main>
        <section className="greeting">
          <p className="hello">Hello</p>
          <p className="">I'm Courtney Kakebeen</p>
          <p>Front End Developer</p>
        </section>
        <section className="links">
          <a 
            href="https://github.com/LAsoul88" 
            target="_blank"
            ref={gitRef}
            onMouseEnter={toggleHover}
            onMouseLeave={() => {
              console.log("Event:MouseLeave")
            }}
          ><GitHub fill="black" /></a>
          <a href="https://www.linkedin.com/in/courtneykakebeen/" target="_blank"><LinkedIn fill="black"
          /></a>
        </section>
      </main>
    </>
  );
}

export default Home;