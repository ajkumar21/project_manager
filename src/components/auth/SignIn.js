import React, { Component } from 'react';
import { signIn } from '../../store/actions/authActions';
import { connect } from 'react-redux';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    // e.target.id uses the id field of the html code to get text. id matched state field names so this can be used
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError } = this.props;
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Sign In</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>

          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>

          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Login</button>
            <div className='red-text center'>
              {authError ? 'Login Failed' : ''}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
