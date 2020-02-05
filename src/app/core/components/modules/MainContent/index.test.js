import React from 'react';
import { render } from '@testing-library/react';
import MainContent from './index';

describe('MainContent', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MainContent>
        <p>Lorem Ipsum</p>
      </MainContent>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
