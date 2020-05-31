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
} from '../types';
import { users } from '../../../fixtures';

describe('auth actions', () => {
  it('should create doRequestLogin action', () => {
    const email = 'admin@example.com';
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
    const user = users[0];
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhOTA3NTRiMy04NjdjLTRiNjQtODk2MS1kNjJhZGE2OTkxODciLCJpYXQiOjE1OTA5MzE1NjMsImV4cCI6MTU5MDkzNTE2M30.oEvybQBuSwwf2XLHlSaqwAQGRq9jZOLP5oJMj219ePQ';

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
