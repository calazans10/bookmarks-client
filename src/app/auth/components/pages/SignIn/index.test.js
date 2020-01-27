import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderWithRedux from '../../../../../lib/renderWithRedux';
import { SignIn } from './index';

describe('SignIn', () => {
  it('renders without crashing', () => {
    const { container } = renderWithRedux(
      <MemoryRouter>
        <SignIn onRequestLogin={jest.fn()} />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});