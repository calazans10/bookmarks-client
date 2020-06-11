import React from 'react';
import { render } from '@testing-library/react';
import MainForm from '.';

describe('MainForm', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MainForm legend="A legend" onSubmit={jest.fn()}>
        <div>
          <label htmlFor="test">A label</label>
          <input type="text" id="test" name="test" />
        </div>
      </MainForm>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
