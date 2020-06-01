import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isUserLoggedIn, getUserAllowedPaths } from 'app/auth/selectors';

type PrivateRouteProps = {
  exact: boolean;
  path: string;
  isLoggedIn: boolean;
  allowedPaths: string[];
  children?: React.ReactNode;
};

export const PrivateRoute = ({
  isLoggedIn,
  allowedPaths,
  children = null,
  ...rest
}: PrivateRouteProps) => {
  const renderChildrenOr404 = (path: string, location: any) => {
    if (allowedPaths.includes(path)) {
      return children;
    }

    return <Redirect to={{ pathname: '/not-found', state: { from: location } }} />;
  };

  return (
    <Route
      {...rest}
      render={({ match, location }) =>
        isLoggedIn ? (
          renderChildrenOr404(match.path, location)
        ) : (
            <Redirect to={{ pathname: '/', state: { from: location } }} />
          )
      }
    />
  );
};

const mapStateToProps = state => ({
  isLoggedIn: isUserLoggedIn(state),
  allowedPaths: getUserAllowedPaths(state),
});

export default connect(mapStateToProps)(PrivateRoute);
