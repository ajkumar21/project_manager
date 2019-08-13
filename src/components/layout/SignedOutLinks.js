import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const SignedOutLinks = props => {
  return (
    <React.Fragment>
      <Button style={{ color: 'white' }} component={NavLink} to='/signup'>
        Sign Up
      </Button>

      <Button style={{ color: 'white' }} component={NavLink} to='/signin'>
        Sign In
      </Button>
    </React.Fragment>
  );
};

export default SignedOutLinks;
