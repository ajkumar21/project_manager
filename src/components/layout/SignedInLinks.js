import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className='right'>
      <li>
        <NavLink to='/new'>New Project</NavLink>
      </li>
      <li>
        <NavLink to='/logout'>Log Out</NavLink>
      </li>
      <li>
        <NavLink to='/profile' className='btn btn-floating pink lighten-1'>
          AJ
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
