import React from 'react';
import { render } from '@testing-library/react';
import ButtonSubmit from './index';

describe('ButtonSubmit', () => {
  it('renders without crashing', () => {
    const { container } = render(<ButtonSubmit>Save</ButtonSubmit>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
