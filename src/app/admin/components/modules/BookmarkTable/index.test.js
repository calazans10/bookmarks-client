import React from 'react';
import { render } from '@testing-library/react';
import { BookmarkTable } from './index';

describe('BookmarkTable', () => {
  it('renders without crashing', () => {
    const { container } = render(
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
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
