import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
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
  const appMiddleware = [
    ...getDefaultMiddleware({
      serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
    }),
    routerMiddleware(history),
    sagaMiddleware,
  ];

  if (process.env.REACT_APP_ENVIRONMENT === 'development') {
    return [...appMiddleware, logger];
  }

  return appMiddleware;
};

const sagaMiddleware = createSagaMiddleware();
const middleware = createAppMiddleware(sagaMiddleware);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.REACT_APP_ENVIRONMENT !== 'production',
  });
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
