import React from 'react';

import { projectList } from './util/projectList';

import './styles/Projects';

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <section className="projects-container">
        { projectList.map(project => {
          return (
            <div className="project-container">
              <h3>
                {project.name}
              </h3>
              <p className="description">{project.description}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Projects;