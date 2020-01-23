import React from 'react';
import { render } from '@testing-library/react';
import { UserTable } from './index';

describe('UserTable', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <UserTable
        users={[
          {
            id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
            name: 'John Doe',
            email: 'john.doe@example.com',
            is_admin: false,
          },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
