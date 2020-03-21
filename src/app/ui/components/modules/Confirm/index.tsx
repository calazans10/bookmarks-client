import React, { useState } from 'react';
import { connect } from 'react-redux';
import Portal from '../../../../core/components/modules/Portal';
import { doHideConfirm } from '../../../actions';
import { isConfirmVisible } from '../../../selectors';
import { UIActionTypes } from '../../../types';
import { Container, Dialog, Wrapper, Title, Text, Footer, Button } from './style';

type ConfirmProps = {
  kind?: 'primary' | 'secondary' | 'danger';
  title: string;
  text: string;
  cancelAction?: string;
  confirmAction?: string;
  isVisible: boolean;
  isTightened?: boolean;
  onClick: () => void;
  onHideConfirm: () => UIActionTypes;
};

export const Confirm = ({
  kind = 'primary',
  title,
  text,
  cancelAction = 'Cancel',
  confirmAction = 'Confirm',
  isVisible,
  isTightened = false,
  onClick,
  onHideConfirm,
}: ConfirmProps) => {
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

const mapStateToProps = state => ({
  isVisible: isConfirmVisible(state),
});

const mapDispatchToProps = {
  onHideConfirm: doHideConfirm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
