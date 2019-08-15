import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const ProjectList = ({ projects }) => {
  const [open, setOpen] = React.useState('');

  function handleClickOpen(id) {
    setOpen(id);
  }

  function handleClose() {
    setOpen('');
  }
  // const {
  //   title,
  //   content,
  //   authorFirstName,
  //   authorLastName,
  //   createdAt
  // } = props.project;

  return (
    <div className='project-list section'>
      {/* add the project && in order to prevent front end rending before firestore returns data. otherwise errors occurs */}
      {projects &&
        projects.map(project => {
          return (
            <React.Fragment key={project.id}>
              <Link onClick={() => handleClickOpen(project.id)}>
                <ProjectSummary project={project} />
              </Link>

              <Dialog
                open={open === project.id}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                scroll='paper'
                maxWidth='xl'
              >
                <DialogTitle id='alert-dialog-slide-title'>
                  {project.title}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id='alert-dialog-slide-description'>
                    By {project.authorFirstName + ' ' + project.authorLastName}
                  </DialogContentText>
                </DialogContent>
                <DialogContent>
                  <DialogContentText id='alert-dialog-slide-description'>
                    {project.content}
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default ProjectList;
