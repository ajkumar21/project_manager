import React, { useState } from 'react';
import { signIn } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const SignIn = ({ authError, auth, signIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // checks if logged in, if so then redirect to dashboard page
  if (auth.uid) return <Redirect to='/' />;
  return (
    <div className='container'>
      <h5 className='grey-text text-darken-3'>Sign In</h5>
      <div className='input-field'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className='input-field'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className='input-field'>
        <button
          onClick={() => signIn({ email, password })}
          className='btn pink lighten-1 z-depth-0'
        >
          Login
        </button>
        <div className='red-text center'>{authError ? 'Login Failed' : ''}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
