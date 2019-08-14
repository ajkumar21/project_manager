import React, { useState } from 'react';
import { signIn } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400,
    margin: 'auto',
    marginTop: '50px'
  },
  button: {
    margin: 'auto',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const SignIn = ({ authError, auth, signIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  // checks if logged in, if so then redirect to dashboard page
  if (auth.uid) return <Redirect to='/' />;
  return (
    <Card className={classes.card}>
      <CardContent>
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
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          onClick={() => signIn({ email, password })}
        >
          Login
        </Button>
        <div className='red-text center'>{authError ? 'Login Failed' : ''}</div>
      </CardActions>
    </Card>
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
