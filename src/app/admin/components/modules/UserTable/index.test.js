import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { UserTable } from './index';

describe('UserTable', () => {
  it('renders without crashing', () => {
    const props = {
      users: [
        {
          id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
          name: 'John Doe',
          email: 'john.doe@example.com',
          is_admin: false,
        },
      ],
    };
    const wrapper = shallow(<UserTable {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
