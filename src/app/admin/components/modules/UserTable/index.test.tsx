import React from 'react';
import { render } from '@testing-library/react';
import { UserTable } from './index';
import { users } from '../../../../../fixtures';

describe('UserTable', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <UserTable users={users.filter(user => !user.is_admin)} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
