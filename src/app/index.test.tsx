import React from 'react';
import { waitFor } from '@testing-library/react';
import { renderWithRedux } from 'utils/test-utils';
import history from 'history/browserHistory';
import App from './';

it('renders without crashing', async () => {
  const { container } = renderWithRedux(<App history={history} />);
  await waitFor(() => expect(container.firstChild).toMatchSnapshot());
});
