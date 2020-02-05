import React from 'react';
import { render } from '@testing-library/react';
import { Confirm } from './index';

describe('Confirm', () => {
  let modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  }

  it('renders without crashing', () => {
    const { getByRole } = render(
      <Confirm
        title="Solicitar bobina"
        text="Você confirma a solicitação de bobina?"
        isVisible
        onClick={jest.fn()}
        onHideConfirm={jest.fn()}
      />
    );
    expect(getByRole('dialog')).toMatchSnapshot();
  });
});
