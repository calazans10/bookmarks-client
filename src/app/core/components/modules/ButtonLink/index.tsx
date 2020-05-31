import React from 'react';
import { Button } from './style';

type ButtonLinkProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const ButtonLink = ({ children, onClick }: ButtonLinkProps) => (
  <Button type="button" onClick={onClick}>
    {children}
  </Button>
);

export default ButtonLink;
