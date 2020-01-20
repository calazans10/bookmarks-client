import { createReducer } from '@reduxjs/toolkit';
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

const authReducer = createReducer(INITIAL_STATE, {
  [LOGIN_SUCCESS]: (state, action) => applySuccessLogin(state, action),
});

export default authReducer;
