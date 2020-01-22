import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import MainWrapper from './index';

const mockStore = configureStore([]);

describe('MainWrapper', () => {
  it('renders without crashing', () => {
    const store = mockStore({
      ui: { alert: { message: '', isVisible: false } },
    });

    const { container } = render(
      <Provider store={store}>
        <MainWrapper>
          <p>Lorem Ipsum</p>
        </MainWrapper>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
