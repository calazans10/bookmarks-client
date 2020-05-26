import React from 'react';
import { Container, StyledLink } from './style';

type LogoProps = { to: string } & typeof defaultProps;

const defaultProps = {
  to: '/',
};

const Logo = ({ to }: LogoProps) => (
  <Container>
    <StyledLink to={to}>Bookmarks</StyledLink>
  </Container>
);

Logo.defaultProps = defaultProps;

export default Logo;
