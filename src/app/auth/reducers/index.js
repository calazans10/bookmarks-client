import { LOGIN_SUCCESS } from '../constants/actionTypes';

const INITIAL_STATE = {
  user: {
    name: '',
    email: '',
    is_admin: false,
  },
  token: '',
};

const applySuccessLogin = (state, action) => {
  const { user, token } = action.payload;
  return { ...state, user, token };
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return applySuccessLogin(state, action);
    default:
      return state;
  }
};

export default authReducer;
