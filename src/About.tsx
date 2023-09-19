import React from 'react';

import { skillList } from './util/skillList';

import './styles/About.scss';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="text-left">
        <section className="bio">
          <p className="text">Lorem Ipsum dolor...</p>
        </section>
        <section className="skills">
          <h3>Skills</h3>
          <ul>
            { skillList.map((skill) => {
              return (
                <li>{skill}</li>
              )
            })}
          </ul>
        </section>
      </div>
      <img src="" alt=""/>
    </div>
  )
}

export default About;