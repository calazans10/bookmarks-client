import React from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper } from './style';

const MainHeader = ({ children }) => (
  <Container>
    <Wrapper>{children}</Wrapper>
  </Container>
);

MainHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainHeader;
