import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { User, AuthState, LOGIN_SUCCESS } from '../types';

const initialState: AuthState = {
  user: {
    id: '',
    name: '',
    email: '',
    password_digest: '',
    is_admin: false,
    created_at: '',
    updated_at: '',
    bookmarks_count: 0,
  },
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
