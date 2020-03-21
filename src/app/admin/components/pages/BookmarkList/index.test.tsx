import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRedux } from 'test-utils';
import { BookmarkList } from './index';

describe('BookmarkList', () => {
  it('renders without crashing', () => {
    const { container } = renderWithRedux(
      <MemoryRouter>
        <BookmarkList
          count={1}
          offset={1}
          limit={10}
          total={1}
          onChangeBookmarksMeta={jest.fn()}
          onRequestGetBookmarks={jest.fn()}
        />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});