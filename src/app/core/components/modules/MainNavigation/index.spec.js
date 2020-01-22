import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { MainNavigation } from './index';

describe('MainNavigation', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <MainNavigation pathname="/home" title="Home" onRequestLogout={jest.fn()} />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
