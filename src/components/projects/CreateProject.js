import React, { Component } from 'react';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = e => {
    // e.target.id uses the id field of the html code to get text. id matched state field names so this can be used
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>New Project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Project Title</label>
            <input type='text' id='title' onChange={this.handleChange} />
          </div>

          <div className='input-field'>
            <label htmlFor='content'>Description</label>

            <textarea
              name='content'
              id='content'
              cols='30'
              rows='10'
              className='materialize-textarea'
              onChange={this.handleChange}
            />
          </div>

          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
