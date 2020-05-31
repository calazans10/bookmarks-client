import React from 'react';
import { connect } from 'react-redux';
import { doHideAlert } from '../../../actions';
import { isAlertVisible, getAlertMessage } from '../../../selectors';
import { UIActionTypes } from '../../../types';
import { Container, Message, Icon, Button } from './style';

type AlertProps = {
  message: string;
  isVisible: boolean;
  onHideAlert: () => UIActionTypes;
};

export const Alert = ({ message, isVisible, onHideAlert }: AlertProps) => (
  <Container isVisible={isVisible}>
    <Message>
      <Icon /> {message}
    </Message>
    <Button type="button" aria-label="Close alert" onClick={onHideAlert}>
      <span>Close</span>
    </Button>
  </Container>
);

const mapStateToProps = state => ({
  message: getAlertMessage(state),
  isVisible: isAlertVisible(state),
});

const mapDispatchToProps = {
  onHideAlert: doHideAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
