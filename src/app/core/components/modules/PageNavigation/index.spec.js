import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import PageNavigation from './index';

describe('PageNavigation', () => {
  it('renders without crashing', () => {
    const { container } = render(<PageNavigation pathname="/home" title="Home" />, {
      wrapper: MemoryRouter,
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
