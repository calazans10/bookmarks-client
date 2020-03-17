import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { doHideAlert } from '../../../actions';
import { isAlertVisible, getAlertMessage } from '../../../selectors';
import { Container, Message, Icon, Button } from './style';

export const Alert = ({ message, isVisible, onHideAlert }) => (
  <Container isVisible={isVisible}>
    <Message>
      <Icon /> {message}
    </Message>
    <Button type="button" aria-label="Close alert" onClick={onHideAlert}>
      <span>Close</span>
    </Button>
  </Container>
);

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
