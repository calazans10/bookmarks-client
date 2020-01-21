import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Table = ({ children }) => <Container>{children}</Container>;

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;
