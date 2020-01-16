import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTRATION_REQUEST,
} from '../constants/actionTypes';

export const doRequestLogin = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    auth: {
      email,
      password,
    },
  },
});

export const doSuccessLogin = (user, token) => ({
  type: LOGIN_SUCCESS,
  payload: {
    user,
    token,
  },
});

export const doRequestLogout = () => ({
  type: LOGOUT_REQUEST,
});

export const doSuccessLogout = () => ({
  type: LOGOUT_SUCCESS,
});

export const doRequestRegistration = (name, email, password) => ({
  type: REGISTRATION_REQUEST,
  payload: {
    name,
    email,
    password,
  },
});
