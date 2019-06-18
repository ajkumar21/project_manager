import React from 'react';

const ProjectSummary = ({ project, owner, date }) => {
  return (
    <div className='project-list section'>
      <div className='card z-depth-0 project-summary'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>{project.title}</span>
          <p>Posted By {owner}</p>
          <p className='grey-text'>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
