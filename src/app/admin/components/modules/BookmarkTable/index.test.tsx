import React from 'react';
import { render } from '@testing-library/react';
import { bookmarks } from 'fixtures';
import { BookmarkTable } from '.';

describe('BookmarkTable', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <BookmarkTable bookmarks={bookmarks} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
