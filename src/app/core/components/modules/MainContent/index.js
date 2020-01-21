import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const MainContent = ({ children }) => <Container>{children}</Container>;

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
