import React from 'react';
import { render } from '@testing-library/react';
import { users } from 'fixtures';
import { UserTable } from '.';

describe('UserTable', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <UserTable users={users.filter(user => !user.isAdmin)} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
