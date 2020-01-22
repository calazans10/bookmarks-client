import React from 'react';
import { render } from '@testing-library/react';
import TableColumn from './index';

describe('TableColumn', () => {
  it('renders without crashing', () => {
    const tableRow = document.createElement('tr');
    const { container } = render(<TableColumn label="Name">John Doe</TableColumn>, {
      container: document.body.appendChild(tableRow),
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
