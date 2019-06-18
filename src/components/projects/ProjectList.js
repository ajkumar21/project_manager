import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className='project-list section'>
      {projects.map(project => {
        return (
          <ProjectSummary
            project={project}
            key={project.id}
            owner='AJ'
            date='3rd September, 2am'
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
