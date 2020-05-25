import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
};

const Portal = ({ children }: PortalProps) => {
  let modalRoot = document.getElementById('modal-root') as HTMLElement;

  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  }

  const el: HTMLElement = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  });

  return createPortal(children, el);
}

export default Portal;
