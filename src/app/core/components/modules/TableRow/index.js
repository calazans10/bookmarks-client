import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TableRow = ({ children }) => <tr className="table-row">{children}</tr>;

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableRow;
