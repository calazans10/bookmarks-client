import { createSelector } from '@reduxjs/toolkit';

export const isUserLoggedIn = ({ auth }) => !!auth.token;

export const getUser = ({ auth }) => auth.user;

export const getUserAllowedPaths = createSelector(getUser, user => {
  if (user.is_admin) {
    return ['/admin/bookmarks', '/admin/users'];
  }

  return ['/bookmarks', '/bookmarks/new', '/bookmarks/:id/edit'];
});
