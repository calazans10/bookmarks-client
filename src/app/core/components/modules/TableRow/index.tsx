import React from 'react';
import { Container } from './style';

type TableRowProps = {
  children: React.ReactNode;
};

const TableRow = ({ children }: TableRowProps) => <Container>{children}</Container>;

export default TableRow;
