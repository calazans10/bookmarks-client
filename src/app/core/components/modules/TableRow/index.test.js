import React from 'react';
import { render } from '@testing-library/react';
import TableRow from './index';

describe('TableRow', () => {
  it('renders without crashing', () => {
    const tableBody = document.createElement('tbody');
    const { container } = render(
      <TableRow>
        <td>Test</td>
      </TableRow>,
      {
        container: document.body.appendChild(tableBody),
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
