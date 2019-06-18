import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            {/* column s12 = 12 columns on small screens, 6 on medium screens */}
            <ProjectList />
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

export default Dashboard;
