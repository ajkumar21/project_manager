import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { projects, auth } = this.props;
    // checks if logged in, if not then redirect to login page
    if (!auth.uid) return <Redirect to='/signin' />;
    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            {/* column s12 = 12 columns on small screens, 6 on medium screens */}
            <ProjectList projects={projects} />
          </div>
          <div className='col s12 m5 offset-m1'>
            {/* offset m-1 means start next column after one space i.e. offset by 1 */}
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // state is the redux state, this is mapping to "projects" held within the props - as displayed by the log on this page
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(Dashboard);
