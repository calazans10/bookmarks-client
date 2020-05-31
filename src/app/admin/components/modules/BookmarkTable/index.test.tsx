import React from 'react';
import { render } from '@testing-library/react';
import { BookmarkTable } from './index';
import { bookmarks } from '../../../../../fixtures';

describe('BookmarkTable', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <BookmarkTable bookmarks={bookmarks} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
