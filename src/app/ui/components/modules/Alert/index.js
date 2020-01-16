import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { doHideAlert } from '../../../actions';
import { isAlertVisible, getAlertMessage } from '../../../selectors';
import './index.scss';

export const Alert = ({ message, isVisible, onHideAlert }) => {
  const divClass = classNames({
    alert: true,
    'alert--visible': isVisible,
  });

  return (
    <div className={divClass}>
      <p className="alert__message">
        <span className="alert__icon" />
        {message}
      </p>
      <button
        className="alert__trigger"
        type="button"
        aria-label="Close alert"
        onClick={onHideAlert}
      >
        <span className="sr-only">x</span>
      </button>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onHideAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  message: getAlertMessage(state),
  isVisible: isAlertVisible(state),
});

const mapDispatchToProps = {
  onHideAlert: doHideAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
