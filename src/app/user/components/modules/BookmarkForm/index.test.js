import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import BookmarkForm from './index';

describe('BookmarkForm', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <BookmarkForm legend="A legend" action="Save" onSubmit={jest.fn()} />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
