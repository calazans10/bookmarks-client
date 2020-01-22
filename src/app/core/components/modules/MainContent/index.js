import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

const MainContent = ({ children }) => <Container>{children}</Container>;

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
