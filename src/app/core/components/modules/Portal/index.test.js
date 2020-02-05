import React from 'react';
import { render } from '@testing-library/react';
import Portal from './index';

describe('Portal', () => {
  let modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  }

  it('shows the children', () => {
    const { getByTestId } = render(
      <Portal>
        <div data-testid="test" />
      </Portal>
    );
    expect(getByTestId('test')).toBeInTheDocument();
  });
});
