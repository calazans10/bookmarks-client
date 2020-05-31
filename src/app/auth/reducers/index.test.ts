import reducer from './index';
import { doSuccessLogin } from '../actions';
import { AuthActionTypes } from '../types';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      user: {},
      token: '',
    };
    expect(reducer(undefined, {} as AuthActionTypes)).toEqual(expectedState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const user = {
      id: '194725c1-739a-46e4-9746-013da114c85c',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      password_digest: '$2a$12$oT4288118r77jU5NEBTN3e0heHXkfFPKwYxhyyVnTTgqoOy4fWO7q',
      is_admin: false,
      created_at: '2020-01-20T20:00:39.614Z',
      updated_at: '2020-01-20T20:00:39.614Z',
      bookmarks_count: 3,
    };
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    const action = doSuccessLogin(user, token);
    const expectedState = {
      token,
      user,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
