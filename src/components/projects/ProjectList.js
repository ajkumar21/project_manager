import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className='project-list section'>
      {/* add the project && in order to prevent front end rending before firestore returns data. otherwise errors occurs */}
      {projects &&
        projects.map(project => {
          return (
            <ProjectSummary
              project={project}
              key={project.id}
              owner={project.authorFirstName + ' ' + project.authorLastName}
              date={'3rd September, 2am'}
            />
          );
        })}
    </div>
  );
};

export default ProjectList;
