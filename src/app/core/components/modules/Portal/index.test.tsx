import React from 'react';
import { render, screen } from '@testing-library/react';
import Portal from './';

describe('Portal', () => {
  it('shows the children', () => {
    render(
      <Portal>
        <div>test</div>
      </Portal>
    );

    expect(screen.getByText('test')).toBeTruthy();
  });
});
