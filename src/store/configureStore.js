import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import history from '../history';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['ui'],
};

const createAppMiddleware = sagaMiddleware => {
  if (process.env.REACT_APP_ENVIRONMENT === 'development') {
    return composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware, logger));
  }

  return applyMiddleware(routerMiddleware(history), sagaMiddleware);
};

const sagaMiddleware = createSagaMiddleware();
const appMiddleware = createAppMiddleware(sagaMiddleware);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, appMiddleware);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
