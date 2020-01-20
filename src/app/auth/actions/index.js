import { createAction } from '@reduxjs/toolkit';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTRATION_REQUEST,
} from '../constants/actionTypes';

export const doRequestLogin = createAction(LOGIN_REQUEST, (email, password) => ({
  payload: { auth: { email, password } },
}));

export const doSuccessLogin = createAction(LOGIN_SUCCESS, (user, token) => ({
  payload: { user, token },
}));

export const doRequestLogout = createAction(LOGOUT_REQUEST);

export const doSuccessLogout = createAction(LOGOUT_SUCCESS);

export const doRequestRegistration = createAction(
  REGISTRATION_REQUEST,
  (name, email, password) => ({
    payload: {
      name,
      email,
      password,
    },
  })
);
