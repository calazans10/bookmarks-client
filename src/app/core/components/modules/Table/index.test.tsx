import React from 'react';
import { render } from '@testing-library/react';
import Table from '.';

describe('Table', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Table>
        <tbody>
          <tr>
            <th>Title</th>
          </tr>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
