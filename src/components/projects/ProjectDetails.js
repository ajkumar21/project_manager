import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

function ProjectDetails(props) {
  const id = props.match.params.id;
  console.log(props);
  // checks if logged in, if not then redirect to login page
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />;
  //Use if statement for db read write as it takes time, so if project is not undefined then return react code else return loading screen
  if (props.project) {
    const { title, content, authorFirstName, authorLastName } = props.project;

    return (
      <div className='container section project-details'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <span className='card-title'> {title + ' - ' + id}</span>
            <p>{content}</p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
            <div>{'By: ' + authorFirstName + ' ' + authorLastName}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      //inline styles take an object within curly braces
      <div style={{ padding: '50px' }} className='container center'>
        LOADING...
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
