import React from 'react';
import { render } from '@testing-library/react';
import MainForm from './index';

describe('MainForm', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MainForm legend="A legend" onSubmit={jest.fn()}>
        <div>
          <label htmlFor="test">A label</label>
          <input id="test" name="test" type="text" />
        </div>
      </MainForm>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
