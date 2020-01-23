import React from 'react';
import renderWithRedux from '../../../../../lib/renderWithRedux';
import MainWrapper from './index';

describe('MainWrapper', () => {
  it('renders without crashing', () => {
    const { container } = renderWithRedux(
      <MainWrapper>
        <p>Lorem Ipsum</p>
      </MainWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
