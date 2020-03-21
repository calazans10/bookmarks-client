import React from 'react';
import { Container } from './style';

type TableColumnProps = {
  label: string;
  hasActions?: boolean;
  children: React.ReactNode;
};

const TableColumn = ({ label, hasActions = false, children }: TableColumnProps) => (
  <Container hasActions={hasActions} data-label={label}>
    {children}
  </Container>
);

export default TableColumn;
