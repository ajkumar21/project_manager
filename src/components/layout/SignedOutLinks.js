import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const SignedOutLinks = props => {
  return (
    <React.Fragment>
      <Button style={{ color: 'white' }} component={Link} to='/signup'>
        Sign Up
      </Button>

      <Button style={{ color: 'white' }} component={Link} to='/signin'>
        Sign In
      </Button>
    </React.Fragment>
  );
};

export default SignedOutLinks;
