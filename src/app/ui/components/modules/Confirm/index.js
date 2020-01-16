import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Portal from '../../../../core/components/modules/Portal';
import { doHideConfirm } from '../../../actions';
import { isConfirmVisible } from '../../../selectors';
import './index.scss';

export const Confirm = ({
  kind,
  title,
  text,
  cancelAction,
  confirmAction,
  isVisible,
  isTightened,
  onClick,
  onHideConfirm,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  const [prevIsVisible, setPrevIsVisible] = useState(null);

  const divClass = classNames({
    confirm: true,
    'confirm--hidden': isHidden,
    'confirm--visible': isVisible,
    'confirm--tightened': isTightened,
    [`confirm--${kind}`]: true,
  });

  const btnClass = classNames({
    confirm__button: true,
    [`confirm__button--${kind}`]: true,
  });

  if (isVisible !== prevIsVisible) {
    setPrevIsVisible(isVisible);
    setIsHidden(!isVisible);
  }

  return (
    <Portal>
      <div className={divClass} role="dialog">
        <div className="confirm__dialog">
          <div className="confirm__content">
            <p className="confirm__title">{title}</p>
            <p className="confirm__text">{text}</p>
            <div className="confirm__footer">
              <button
                className="confirm__button confirm__button--secondary"
                type="button"
                onClick={onHideConfirm}
              >
                {cancelAction}
              </button>
              <button className={btnClass} type="button" onClick={onClick}>
                {confirmAction}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

Confirm.propTypes = {
  kind: PropTypes.oneOf(['primary', 'danger']),
  title: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  cancelAction: PropTypes.string,
  confirmAction: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  isTightened: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onHideConfirm: PropTypes.func.isRequired,
};

Confirm.defaultProps = {
  kind: 'primary',
  cancelAction: 'Cancel',
  confirmAction: 'Confirm',
  isTightened: false,
};

const mapStateToProps = state => ({
  isVisible: isConfirmVisible(state),
});

const mapDispatchToProps = {
  onHideConfirm: doHideConfirm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
