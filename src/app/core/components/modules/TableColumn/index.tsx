import React from 'react';
import { Container } from './style';

type TableColumnProps = {
  label: string;
  hasActions: boolean;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  hasActions: false,
};

const TableColumn = ({ label, hasActions, children }: TableColumnProps) => (
  <Container hasActions={hasActions} data-label={label}>
    {children}
  </Container>
);

TableColumn.defaultProps = defaultProps;

export default TableColumn;
