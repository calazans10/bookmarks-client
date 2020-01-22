import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

const TableColumn = ({ label, hasActions, children }) => (
  <Container hasActions={hasActions} data-label={label}>
    {children}
  </Container>
);

TableColumn.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hasActions: PropTypes.bool,
};

TableColumn.defaultProps = {
  hasActions: false,
};

export default TableColumn;
