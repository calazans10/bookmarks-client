import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './index';

describe('Pagination', () => {
  describe('when is visible', () => {
    it('renders without crashing', () => {
      const { container } = render(
        <Pagination initialPage={0} count={10} limit={10} total={17} onChange={jest.fn()} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('when is not visible', () => {
    it('renders nothing', () => {
      const { container } = render(
        <Pagination initialPage={0} count={7} limit={10} total={7} onChange={jest.fn()} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
