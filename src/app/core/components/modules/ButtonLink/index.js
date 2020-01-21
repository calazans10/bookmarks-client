import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

const ButtonLink = ({ children, onClick }) => (
  <Button type="button" onClick={onClick}>
    {children}
  </Button>
);

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonLink;
