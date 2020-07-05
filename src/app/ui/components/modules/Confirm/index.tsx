import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doHideConfirm } from 'app/ui/actions';
import { isConfirmVisible } from 'app/ui/selectors';
import { RootState, UIActionTypes } from 'app/ui/types';
import Portal from 'app/core/components/modules/Portal';
import { Container, Dialog, Wrapper, Title, Text, Footer, Button } from './style';

type Kind = 'primary' | 'secondary' | 'danger';

type ConfirmProps = {
  kind: Kind;
  title: string;
  text: string;
  cancelAction: string;
  confirmAction: string;
  isVisible: boolean;
  isTightened: boolean;
  onClick: () => void;
  onHideConfirm: () => UIActionTypes;
} & typeof defaultProps;

const defaultProps = {
  kind: 'primary' as Kind,
  cancelAction: 'Cancel',
  confirmAction: 'Confirm',
  isTightened: false,
};

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
}: ConfirmProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const [prevIsVisible, setPrevIsVisible] = useState<boolean | null>(null);

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

Confirm.defaultProps = defaultProps;

const mapStateToProps = (state: RootState) => ({
  isVisible: isConfirmVisible(state),
});

const mapDispatchToProps = {
  onHideConfirm: doHideConfirm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
