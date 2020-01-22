import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import PageNavigation from './index';

describe('PageNavigation', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <PageNavigation pathname="/home" title="Home" />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
