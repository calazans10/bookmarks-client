import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

const TableRow = ({ children }) => <Container>{children}</Container>;

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableRow;
