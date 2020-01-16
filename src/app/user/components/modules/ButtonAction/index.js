import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const ButtonAction = ({ kind, onClick, children }) => {
  const btnClass = classNames({
    'button-action': true,
    [`button-action--${kind}`]: true,
  });

  return (
    <button type="button" className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

ButtonAction.propTypes = {
  kind: PropTypes.oneOf(['success', 'danger']).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonAction;
