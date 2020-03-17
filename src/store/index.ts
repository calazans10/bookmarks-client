import configureStore from './configureStore';

const { store, persistor } = configureStore();

export { store, persistor };
