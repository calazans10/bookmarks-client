import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Portal from '../../../../core/components/modules/Portal';
import { doHideConfirm } from '../../../actions';
import { isConfirmVisible } from '../../../selectors';
import { Container, Dialog, Wrapper, Title, Text, Footer, Button } from './style';

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

  const dialogKind = isTightened ? 'secondary' : 'primary';

  if (isVisible !== prevIsVisible) {
    setPrevIsVisible(isVisible);
    setIsHidden(!isVisible);
  }

  return (
    <Portal>
      <Container isVisible={isVisible} role="dialog">
        <Dialog theme={{ main: dialogKind }} isHidden={isHidden} isVisible={isVisible}>
          <Wrapper>
            <Title theme={{ main: kind }}>{title}</Title>
            <Text theme={{ main: kind }}>{text}</Text>
            <Footer>
              <Button theme={{ main: 'secondary' }} type="button" onClick={onHideConfirm}>
                {cancelAction}
              </Button>
              <Button theme={{ main: kind }} type="button" onClick={onClick}>
                {confirmAction}
              </Button>
            </Footer>
          </Wrapper>
        </Dialog>
      </Container>
    </Portal>
  );
};

Confirm.propTypes = {
  kind: PropTypes.oneOf(['primary', 'secondary', 'danger']),
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
