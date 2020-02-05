import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './style';

const PageSection = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

PageSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageSection;
