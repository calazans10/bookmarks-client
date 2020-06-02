import React from 'react';
import { renderWithRedux } from 'utils/test-utils';
import MainWrapper from './';

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
