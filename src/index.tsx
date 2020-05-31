import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import env from 'env-var';
import App from './app';
import { GlobalStyle } from './style';
import history from './history/browserHistory';
import { store, persistor } from './store';
import { makeServer } from './server'

const MOCK_ENABLED = env.get('REACT_APP_MOCK_ENABLED').required().asBool();

if (MOCK_ENABLED) {
  makeServer()
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App history={history} />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
