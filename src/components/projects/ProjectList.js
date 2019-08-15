import React from 'react';
import Grow from '@material-ui/core/Grow';

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

export default function SimpleGrow({ projects }) {
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
    <div
      style={{
        maxWidth: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto',
        alignItems: 'center'
      }}
    >
      {' '}
      {projects &&
        projects.map((project, index) => {
          return (
            <React.Fragment key={project.id}>
              <Grow in {...{ timeout: 1000 * index }}>
                <Link onClick={() => handleClickOpen(project.id)}>
                  <ProjectSummary project={project} />
                </Link>
              </Grow>

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
}
