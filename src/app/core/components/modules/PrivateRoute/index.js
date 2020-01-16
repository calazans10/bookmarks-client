import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isUserLoggedIn, getUserAllowedPaths } from '../../../../auth/selectors';

export const PrivateRoute = ({ isLoggedIn, allowedPaths, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        allowedPaths.includes(props.match.path) ? (
          <Component {...props} />
        ) : (
          <Redirect push to={{ pathname: '/not-found', state: { from: props.location } }} />
        )
      ) : (
        <Redirect push to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  allowedPaths: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: isUserLoggedIn(state),
  allowedPaths: getUserAllowedPaths(state),
});

export default connect(mapStateToProps)(PrivateRoute);
