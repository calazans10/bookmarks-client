import React from 'react';
import { renderWithRedux } from 'test-utils';
import { BookmarkTable } from './index';

describe('BookmarkTable', () => {
  let modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  }

  it('renders without crashing', () => {
    const { container } = renderWithRedux(
      <BookmarkTable
        bookmarks={[
          {
            id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
            url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
            title: 'Introducing the React RFC Process',
            user: {
              id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
              name: 'John Doe',
              email: 'john.doe@example.com',
              is_admin: false,
            },
          },
        ]}
        onChangeLocation={jest.fn()}
        onShowConfirm={jest.fn()}
        onChangeSelectedBookmark={jest.fn()}
        onRequestDeleteBookmark={jest.fn()}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
