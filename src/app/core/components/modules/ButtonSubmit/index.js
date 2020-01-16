import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const ButtonSubmit = ({ children }) => (
  <button className="button-submit" type="submit">
    {children}
  </button>
);

ButtonSubmit.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonSubmit;
