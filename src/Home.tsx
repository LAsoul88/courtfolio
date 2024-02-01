import React from 'react';

import { Github, LinkedIn } from './images/images';
import { Typewriter } from './components/Typewriter';

import './styles/Home';

const Home = () => {

  const typewriterText: string[] = [
    'Front End Engineer',
    'Back End Engineer',
    'Full Stack Engineer'
  ];

  return (
    <>
      <h1></h1>
      <main>
        <section className="greeting">
            Hello<br/>
            I'm Courtney Kakebeen<br/>
            <Typewriter text={typewriterText} delay={150} infinite />
          {/* <div className="container"> */}
        </section>
        <section className="links">
          <a 
            href="https://github.com/LAsoul88" 
            target="_blank"
            className="link"
          >
            <Github width="100" height="100" />
          </a>
          <a 
            href="https://www.linkedin.com/in/courtneykakebeen/" 
            target="_blank"
            className="link"
          >
            <LinkedIn width="100" height="100" />
          </a>
        </section>
      </main>
    </>
  );
}

export default Home;