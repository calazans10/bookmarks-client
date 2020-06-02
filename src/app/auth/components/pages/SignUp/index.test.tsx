import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRedux } from 'utils/test-utils';
import { SignUp } from '.';

describe('SignUp', () => {
  it('renders without crashing', () => {
    const { container } = renderWithRedux(
      <MemoryRouter>
        <SignUp onRequestRegistration={jest.fn()} />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
