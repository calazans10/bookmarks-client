import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const MainContent = ({ children }) => <main className="main-content">{children}</main>;

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
