import React from 'react';
import { Container, Legend } from './style';

type MainFormProps = {
  legend: string;
  children: React.ReactNode;
  onSubmit: () => void;
};

const MainForm = ({ legend, children, onSubmit }: MainFormProps) => (
  <Container autoComplete="off" noValidate onSubmit={onSubmit}>
    <fieldset>
      <Legend>{legend}</Legend>
      {children}
    </fieldset>
  </Container>
);

export default MainForm;
