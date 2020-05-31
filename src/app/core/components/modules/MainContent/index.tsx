import React from 'react';
import { Container } from './style';

type MainContentProps = {
  children: React.ReactNode;
};

const MainContent = ({ children }: MainContentProps) => <Container>{children}</Container>;

export default MainContent;
