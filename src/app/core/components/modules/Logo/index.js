import React from 'react';
import PropTypes from 'prop-types';
import { Container, StyledLink } from './styles';

const Logo = ({ to }) => (
  <Container>
    <StyledLink to={to}>Bookmarks</StyledLink>
  </Container>
);

Logo.propTypes = {
  to: PropTypes.string,
};

Logo.defaultProps = {
  to: '/',
};

export default Logo;
