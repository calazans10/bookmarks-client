import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFound from './index';

describe('NotFound', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/unknown']}>
        <NotFound />
      </MemoryRouter>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
