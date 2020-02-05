import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRedux } from 'test-utils';
import { BookmarkList } from './index';

describe('BookmarkList', () => {
  let modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  }

  it('renders without crashing', () => {
    const { container } = renderWithRedux(
      <MemoryRouter>
        <BookmarkList
          count={1}
          offset={1}
          limit={10}
          total={10}
          onRequestGetMyBookmarks={jest.fn()}
        />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
