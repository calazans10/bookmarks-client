import React from 'react';
import { render } from '@testing-library/react';
import { Confirm } from './index';

describe('Confirm', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(
      <Confirm
        title="Delete bookmark"
        text="Are you sure you want to delete this bookmark?"
        kind="danger"
        isVisible
        onClick={jest.fn()}
        onHideConfirm={jest.fn()}
      />
    );
    expect(getByRole('dialog')).toMatchSnapshot();
  });
});
