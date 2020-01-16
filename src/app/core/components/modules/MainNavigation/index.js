import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { doRequestLogout } from '../../../../auth/actions';
import './index.scss';

export const MainNavigation = ({ pathname, title, onRequestLogout }) => (
  <nav className="main-navigation">
    <ul className="main-navigation__list">
      <li className="main-navigation__item">
        {pathname && title ? (
          <Link to={pathname}>{title}</Link>
        ) : (
          <button className="main-navigation__button" type="button" onClick={onRequestLogout}>
            Sign Out
          </button>
        )}
      </li>
    </ul>
  </nav>
);

MainNavigation.propTypes = {
  pathname: PropTypes.string,
  title: PropTypes.string,
  onRequestLogout: PropTypes.func.isRequired,
};

MainNavigation.defaultProps = {
  pathname: '',
  title: '',
};

const mapDispatchToProps = {
  onRequestLogout: doRequestLogout,
};

export default connect(null, mapDispatchToProps)(MainNavigation);
