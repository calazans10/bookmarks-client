import React from 'react';
import { render, screen } from '@testing-library/react';
import Portal from './index';

describe('Portal', () => {
  let modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  }

  it('shows the children', () => {
    render(
      <Portal>
        <div>test</div>
      </Portal>
    );

    expect(screen.getByText('test')).toBeTruthy();
  });
});
