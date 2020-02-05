import reducer from './index';
import { doSuccessLogin } from '../actions';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      user: {
        name: '',
        email: '',
        is_admin: false,
      },
      token: '',
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      is_admin: false,
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
