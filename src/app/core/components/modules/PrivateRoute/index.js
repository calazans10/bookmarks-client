import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isUserLoggedIn, getUserAllowedPaths } from 'app/auth/selectors';

export const PrivateRoute = ({ isLoggedIn, allowedPaths, children = null, ...rest }) => {
  const renderChildrenOr404 = (path, location) => {
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

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  /* eslint react/forbid-prop-types: "off" */
  allowedPaths: PropTypes.array.isRequired,
  children: PropTypes.node,
};

PrivateRoute.defaultProps = {
  children: null,
};

const mapStateToProps = state => ({
  isLoggedIn: isUserLoggedIn(state),
  allowedPaths: getUserAllowedPaths(state),
});

export default connect(mapStateToProps)(PrivateRoute);
