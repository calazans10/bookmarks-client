import { isUserLoggedIn, getUser, getUserAllowedPaths } from './index';

describe('auth selectors', () => {
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
