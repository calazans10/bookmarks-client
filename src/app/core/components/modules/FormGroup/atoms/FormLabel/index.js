import React from 'react';
import PropTypes from 'prop-types';

const FormLabel = ({ htmlFor, children }) => (
  <label className="form-group__label" htmlFor={htmlFor}>
    {children}
  </label>
);

FormLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormLabel;
