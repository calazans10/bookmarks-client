import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const ButtonLink = ({ children, onClick }) => (
  <button type="button" className="button-link" onClick={onClick}>
    {children}
  </button>
);

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonLink;
