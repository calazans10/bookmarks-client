import { createSelector } from '@reduxjs/toolkit';
import { User, AuthSelector } from '../types';

export const isUserLoggedIn = ({ auth }: AuthSelector) => !!auth.token;

export const getUser = ({ auth }: AuthSelector) => auth.user;

export const getUserAllowedPaths = createSelector(getUser, (user: User) => {
  if (user.is_admin) {
    return ['/admin/bookmarks', '/admin/users'];
  }

  return ['/bookmarks', '/bookmarks/new', '/bookmarks/:id/edit'];
});
