import React from 'react';
import { Container, Title } from './style';

type PageSectionProps = {
  title: string;
  children: React.ReactNode;
};

const PageSection = ({ title, children }: PageSectionProps) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

export default PageSection;
