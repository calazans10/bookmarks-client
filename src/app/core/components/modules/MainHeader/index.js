import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const MainHeader = ({ children }) => (
  <header className="main-header">
    <div className="main-header__container">{children}</div>
  </header>
);

MainHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainHeader;
