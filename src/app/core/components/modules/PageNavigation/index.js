import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.scss';

const PageNavigation = ({ pathname, title }) => (
  <div className="page-navigation">
    <ul className="page-navigation__list">
      <li className="page-navigation__item">
        <Link to={pathname}>{title}</Link>
      </li>
    </ul>
  </div>
);

PageNavigation.propTypes = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageNavigation;
