export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';

export interface User {
  id: string;
  name: string;
  email: string;
  password_digest: string;
  is_admin: boolean;
  created_at: string;
  updated_at: string;
  bookmarks_count: number;
}

export interface AuthState {
  user: User;
  token: string;
}
export interface AuthSelector {
  auth: AuthState;
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
