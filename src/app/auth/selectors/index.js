export const isUserLoggedIn = ({ auth }) => !!auth.token;

export const getUser = ({ auth }) => auth.user;

export const getUserAllowedPaths = state => {
  const user = getUser(state);

  if (user.is_admin) {
    return ['/admin/bookmarks', '/admin/users'];
  }

  return ['/bookmarks', '/bookmarks/new', '/bookmarks/:id/edit'];
};
