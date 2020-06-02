import { users } from 'fixtures';
import { doSuccessLogin } from 'app/auth/actions';
import { AuthActionTypes } from 'app/auth/types';
import reducer from '.';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      user: {},
      token: '',
    };
    expect(reducer(undefined, {} as AuthActionTypes)).toEqual(expectedState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    // Arrange
    const user = users[0];
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhOTA3NTRiMy04NjdjLTRiNjQtODk2MS1kNjJhZGE2OTkxODciLCJpYXQiOjE1OTA5MzE1NjMsImV4cCI6MTU5MDkzNTE2M30.oEvybQBuSwwf2XLHlSaqwAQGRq9jZOLP5oJMj219ePQ';

    const expectedState = {
      token,
      user,
    };

    // Act
    const action = doSuccessLogin(user, token);

    // Assert
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
