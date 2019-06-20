const initialState = {
  // p"rojects" is within the project property defined in the rootReducer
  projects: [
    { id: '1', title: 'project 1', content: 'content 1' },
    { id: '2', title: 'project 2', content: 'content 2' },
    { id: '3', title: 'project 3', content: 'content 3' }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      return state;
    default:
      return state;
  }
};

export default projectReducer;
