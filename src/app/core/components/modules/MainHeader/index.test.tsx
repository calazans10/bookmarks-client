import React from 'react';
import { render } from '@testing-library/react';
import MainHeader from './';

describe('MainHeader', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MainHeader>
        <ul>
          <li>Test</li>
        </ul>
      </MainHeader>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
