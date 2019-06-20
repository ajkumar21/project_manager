import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const NavBar = props => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo left'>
          {' '}
          Project Manager
        </Link>
        {props.loggedIn ? (
          <SignedInLinks profile={props.profile} />
        ) : (
          <SignedOutLinks />
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: !state.firebase.auth.isEmpty,
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps)(NavBar);
