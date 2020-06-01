import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import BookmarkForm from './';

describe('BookmarkForm', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <BookmarkForm legend="A legend" action="Save" onSubmit={jest.fn()} />,
      { wrapper: MemoryRouter }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
