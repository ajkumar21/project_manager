import React from 'react';
import moment from 'moment'; //date display manipulation - check docs for functions
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400,
    margin: 'auto',
    marginTop: '40px'
  }
});

const ProjectSummary = ({ project }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className='card z-depth-0 project-summary'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>{project.title}</span>
          <p>
            Posted By {project.authorFirstName + ' ' + project.authorLastName}
          </p>
          <p className='grey-text'>
            {moment(project.createdAt.toDate()).calendar()}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ProjectSummary;
