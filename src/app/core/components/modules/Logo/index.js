import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.scss';

const Logo = ({ to }) => (
  <div className="logo">
    <Link to={to}>Bookmarks</Link>
  </div>
);

Logo.propTypes = {
  to: PropTypes.string,
};

Logo.defaultProps = {
  to: '/',
};

export default Logo;
