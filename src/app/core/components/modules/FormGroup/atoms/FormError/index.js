import React from 'react';
import PropTypes from 'prop-types';

const FormError = ({ children }) => <span className="form-group__error">{children}</span>;

FormError.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormError;
