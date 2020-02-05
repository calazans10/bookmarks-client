import React from 'react';
import { wait } from '@testing-library/react';
import { renderWithRedux } from 'test-utils';
import App from './index';
import history from '../history';

it('renders without crashing', async () => {
  const { container } = renderWithRedux(<App history={history} />);
  await wait();
  expect(container.firstChild).toMatchSnapshot();
});
