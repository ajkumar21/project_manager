import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import Button from '@material-ui/core/Button';
import { createProject } from '../../store/actions/projectActions';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const SignedInLinks = props => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.createProject({ title, content });
    handleClose();
  }

  return (
    <React.Fragment>
      <Button
        style={{ color: 'white' }}
        component='a'
        onClick={handleClickOpen}
      >
        New
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        maxWidth='xl'
      >
        <DialogTitle id='form-dialog-title'>New Blog Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='title'
            label='Title'
            type='text'
            fullWidth
            maxWidth='xl'
            multiline
            rows={1}
            onChange={event => {
              setTitle(event.target.value);
            }}
          />
          <TextField
            autoFocus
            margin='dense'
            id='description'
            label='Description'
            type='text'
            fullWidth
            multiline
            rows={5}
            onChange={event => {
              setContent(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            Post
          </Button>
        </DialogActions>
      </Dialog>

      <Button style={{ color: 'white' }} component='a' onClick={props.signOut}>
        Log Out
      </Button>

      <NavLink to='/profile' className='btn btn-floating pink lighten-1'>
        {props.profile.initials}
      </NavLink>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    createProject: project => dispatch(createProject(project))
  };
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInLinks);
