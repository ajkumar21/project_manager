const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, login: true, authError: null };
    case 'LOGIN_ERROR':
      return { ...state, login: false, authError: action.err.message };
    case 'SIGNOUT_SUCCESS':
      return { ...state, login: false, authError: null };
    case 'SIGNUP_SUCCESS':
      return { ...state, authError: null };
    case 'SIGNUP_ERROR':
      return { ...state, authError: action.err.message };
    default:
      return state;
  }
};

export default authReducer;
