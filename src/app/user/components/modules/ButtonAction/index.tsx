import React from 'react';
import { Button } from './style';

type ButtonActionProps = {
  kind: 'success' | 'danger';
  onClick: () => void;
  children: React.ReactNode;
};

const ButtonAction = ({ kind, onClick, children }: ButtonActionProps) => {
  return (
    <Button theme={{ main: kind }} type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonAction;
