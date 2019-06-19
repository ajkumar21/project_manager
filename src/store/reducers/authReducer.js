const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, login: true, authError: null };
    case 'LOGIN_ERROR':
      return { ...state, login: false, authError: action.err };
    case 'SIGNOUT_SUCCESS':
      return { ...state, login: false, authError: null };
    default:
      return state;
  }
};

export default authReducer;
