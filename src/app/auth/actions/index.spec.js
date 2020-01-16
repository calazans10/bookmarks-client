import {
  doRequestLogin,
  doSuccessLogin,
  doRequestLogout,
  doSuccessLogout,
  doRequestRegistration,
} from './index';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTRATION_REQUEST,
} from '../constants/actionTypes';

describe('auth actions', () => {
  it('should create doRequestLogin action', () => {
    const email = 'john.doe@example.com';
    const password = '1234';
    const expectedAction = {
      type: LOGIN_REQUEST,
      payload: {
        auth: {
          email,
          password,
        },
      },
    };
    expect(doRequestLogin(email, password)).toEqual(expectedAction);
  });

  it('should create doSuccessLogin action', () => {
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      is_admin: false,
    };
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    const expectedAction = {
      type: LOGIN_SUCCESS,
      payload: {
        user,
        token,
      },
    };
    expect(doSuccessLogin(user, token)).toEqual(expectedAction);
  });

  it('should create doRequestLogout action', () => {
    const expectedAction = {
      type: LOGOUT_REQUEST,
    };
    expect(doRequestLogout()).toEqual(expectedAction);
  });

  it('should create doSuccessLogout action', () => {
    const expectedAction = {
      type: LOGOUT_SUCCESS,
    };
    expect(doSuccessLogout()).toEqual(expectedAction);
  });

  it('should create doRequestRegistration action', () => {
    const name = 'John Doe';
    const email = 'john.doe@example.com';
    const password = '1234';
    const expectedAction = {
      type: REGISTRATION_REQUEST,
      payload: {
        name,
        email,
        password,
      },
    };
    expect(doRequestRegistration(name, email, password)).toEqual(expectedAction);
  });
});
