import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './index';

describe('Pagination', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Pagination initialPage={0} pageCount={10} onChange={jest.fn()} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
