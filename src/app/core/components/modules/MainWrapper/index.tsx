import React from 'react';
import Alert from 'app/ui/components/modules/Alert';
import { Container } from './style';

type MainWrapperProps = {
  children: React.ReactNode;
};

const MainWrapper = ({ children }: MainWrapperProps) => (
  <Container>
    <Alert />
    {children}
  </Container>
);

export default MainWrapper;
