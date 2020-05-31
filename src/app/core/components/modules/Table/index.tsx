import React from 'react';
import { Container } from './style';

type TableProps = {
  children: React.ReactNode;
};

const Table = ({ children }: TableProps) => <Container>{children}</Container>;

export default Table;
