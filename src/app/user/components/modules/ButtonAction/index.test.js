import React from 'react';
import { render } from '@testing-library/react';
import ButtonAction from './index';

describe('ButtonAction', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ButtonAction kind="success" onClick={jest.fn()}>
        Edit
      </ButtonAction>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
