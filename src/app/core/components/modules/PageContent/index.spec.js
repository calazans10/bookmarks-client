import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import PageContent from './index';

const mockStore = configureStore([]);

describe('PageContent', () => {
  it('renders without crashing', () => {
    const store = mockStore({
      ui: { alert: { message: '', isVisible: false } },
    });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <PageContent to="/home">
            <p>Lorem Ipsum</p>
          </PageContent>
        </MemoryRouter>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
