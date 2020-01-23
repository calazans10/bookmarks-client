import { isUserLoggedIn, getUser, getUserAllowedPaths } from './index';

describe('auth selectors', () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    is_admin: false,
  };
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

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
    it('should returns the allowed paths for admin', () => {
      const updatedUser = { ...user, is_admin: true };
      const updatedState = { ...state, auth: { user: updatedUser, token } };

      expect(getUserAllowedPaths(updatedState)).toEqual(['/admin/bookmarks', '/admin/users']);
    });

    it('should returns the allowed paths for user', () => {
      expect(getUserAllowedPaths(state)).toEqual([
        '/bookmarks',
        '/bookmarks/new',
        '/bookmarks/:id/edit',
      ]);
    });
  });
});
