import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './style';

const ButtonAction = ({ kind, onClick, children }) => {
  return (
    <Button theme={{ main: kind }} type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

ButtonAction.propTypes = {
  kind: PropTypes.oneOf(['success', 'danger']).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonAction;
