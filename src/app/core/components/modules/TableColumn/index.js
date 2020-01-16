import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const TableColumn = ({ label, hasActions, children }) => {
  const tdClass = classNames({
    'table-column': true,
    'table-column--actions': hasActions,
  });

  return (
    <td className={tdClass} data-label={label}>
      {children}
    </td>
  );
};

TableColumn.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hasActions: PropTypes.bool,
};

TableColumn.defaultProps = {
  hasActions: false,
};

export default TableColumn;
