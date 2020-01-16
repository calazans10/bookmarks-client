import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Table from './index';

describe('Table', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Table>
        <tr>
          <th>Title</th>
        </tr>
        <tr>
          <td>Test</td>
        </tr>
      </Table>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
