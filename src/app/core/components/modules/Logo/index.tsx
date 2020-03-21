import React from 'react';
import { Container, StyledLink } from './style';

type LogoProps = {
  to?: string;
};

const Logo = ({ to = '/' }: LogoProps) => (
  <Container>
    <StyledLink to={to}>Bookmarks</StyledLink>
  </Container>
);

export default Logo;
