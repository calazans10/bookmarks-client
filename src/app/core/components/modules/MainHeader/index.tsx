import React from 'react';
import { Container, Wrapper } from './style';

type MainHeaderProps = {
  children: React.ReactNode;
};

const MainHeader = ({ children }: MainHeaderProps) => (
  <Container>
    <Wrapper>{children}</Wrapper>
  </Container>
);

export default MainHeader;
