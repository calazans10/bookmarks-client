export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const REGISTRATION_REQUEST = 'auth/REGISTRATION_REQUEST';

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User;
  token: string;
}
export interface AuthSelector {
  auth: AuthState;
}

export interface AuthData {
  name?: string;
  email: string;
  password: string;
}

export interface RequestLoginAction {
  type: typeof LOGIN_REQUEST;
  payload: {
    auth: {
      email: string;
      password: string;
    };
  };
}

interface SuccessLoginAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    user: User;
    token: string;
  };
}

interface RequestLogoutAction {
  type: typeof LOGOUT_REQUEST;
}

interface SuccessLogoutAction {
  type: typeof LOGOUT_SUCCESS;
}

export interface RequestRegistrationAction {
  type: typeof REGISTRATION_REQUEST;
  payload: {
    name: string;
    email: string;
    password: string;
  };
}

export type AuthActionTypes =
  | RequestLoginAction
  | SuccessLoginAction
  | RequestLogoutAction
  | SuccessLogoutAction
  | RequestRegistrationAction;
