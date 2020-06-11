import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { MainNavigation } from '.';

describe('MainNavigation', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MainNavigation pathname="/home" title="Home" onRequestLogout={jest.fn()} />,
      { wrapper: MemoryRouter }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
