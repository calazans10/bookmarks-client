import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from './';

describe('Loading', () => {
  describe('when is visible', () => {
    it('renders without crashing', () => {
      const { container } = render(<Loading isVisible />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('when is not visible', () => {
    it('renders nothing', () => {
      const { container } = render(<Loading isVisible={false} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
