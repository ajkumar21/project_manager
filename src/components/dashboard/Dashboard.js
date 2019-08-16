import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    // checks if logged in, if not then redirect to login page
    if (!auth.uid) return <Redirect to='/signin' />;
    return (
      <div style={{ marginTop: '75px' }} className='row'>
        <div style={{ alignItems: 'center' }} className='col s9'>
          {/* column s12 = 12 columns on small screens, 6 on medium screens */}
          <ProjectList projects={projects} />
        </div>
        <div style={{ alignItems: 'center' }} className='col s3'>
          {/* offset m-1 means start next column after one space i.e. offset by 1 */}
          <Notifications notifications={notifications} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // state is the redux state, this is mapping to "projects" held within the props - as displayed by the log on this page
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 10, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);
