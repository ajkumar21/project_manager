import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <div className='project-list section'>
      {/* add the project && in order to prevent front end rending before firestore returns data. otherwise errors occurs */}
      {projects &&
        projects.map(project => {
          return (
            <Link key={project.id} to={'/project/' + project.id}>
              <ProjectSummary
                project={project}
                key={project.id}
                owner={project.authorFirstName + ' ' + project.authorLastName}
                date={'3rd September, 2am'}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
