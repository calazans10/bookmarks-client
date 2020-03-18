import {
  User,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTRATION_REQUEST,
  AuthActionTypes,
} from '../types';

export const doRequestLogin = (email: string, password: string): AuthActionTypes => ({
  type: LOGIN_REQUEST,
  payload: { auth: { email, password } },
});

export const doSuccessLogin = (user: User, token: string): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
  payload: { user, token },
});

export const doRequestLogout = (): AuthActionTypes => ({
  type: LOGOUT_REQUEST,
});

export const doSuccessLogout = (): AuthActionTypes => ({
  type: LOGOUT_SUCCESS,
});

export const doRequestRegistration = (
  name: string,
  email: string,
  password: string
): AuthActionTypes => ({
  type: REGISTRATION_REQUEST,
  payload: {
    name,
    email,
    password,
  },
});
