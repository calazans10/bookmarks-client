import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { User, AuthState, LOGIN_SUCCESS } from '../types';

const initialState: AuthState = {
  user: {} as User,
  token: '',
};

const applySuccessLogin = (state, action) => {
  const { user, token } = action.payload;
  state.user = user;
  state.token = token;
};

const authReducer = createReducer(initialState, {
  [LOGIN_SUCCESS]: (state, action: PayloadAction<{ user: User; token: string }>) =>
    applySuccessLogin(state, action),
});

export default authReducer;
