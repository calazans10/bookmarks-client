import { users } from 'fixtures';
import { isUserLoggedIn, getUser, getUserAllowedPaths } from './';

describe('auth selectors', () => {
  const user = users[0];
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhOTA3NTRiMy04NjdjLTRiNjQtODk2MS1kNjJhZGE2OTkxODciLCJpYXQiOjE1OTA5MzE1NjMsImV4cCI6MTU5MDkzNTE2M30.oEvybQBuSwwf2XLHlSaqwAQGRq9jZOLP5oJMj219ePQ';

  const state = {
    auth: {
      user,
      token,
    },
  };

  it('should create a selector that returns if an user is logged in', () => {
    expect(isUserLoggedIn(state)).toEqual(true);
  });

  it('should create a selector that returns the user', () => {
    expect(getUser(state)).toEqual(user);
  });

  describe('getUserAllowedPaths', () => {
    it('should returns the allowed paths for user', () => {
      const updatedState = { ...state, auth: { user: { ...user, is_admin: false }, token } };

      expect(getUserAllowedPaths(updatedState)).toEqual([
        '/bookmarks',
        '/bookmarks/new',
        '/bookmarks/:id/edit',
      ]);
    });

    it('should returns the allowed paths for admin', () => {
      expect(getUserAllowedPaths(state)).toEqual(['/admin/bookmarks', '/admin/users']);
    });
  });
});
