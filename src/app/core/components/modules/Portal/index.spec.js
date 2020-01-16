import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Portal from './index';

describe('Portal', () => {
  let modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  }

  afterEach(cleanup);

  it('should render the Portal component', () => {
    const { container } = render(
      <Portal>
        <div>test</div>
      </Portal>
    );
    expect(container).toMatchSnapshot();
  });
});
