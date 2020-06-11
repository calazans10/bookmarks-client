import React, { ReactNode } from 'react';
import { AnyAction, Action, createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import { render, RenderResult } from '@testing-library/react';
import rootReducer from 'reducers';

/* eslint @typescript-eslint/no-explicit-any: "off" */
interface RenderWithRedux<S = any, A extends Action = AnyAction, I extends S = any> {
  (
    ui: ReactNode,
    reduxOptions?: {
      store?: Store<S, A>;
      initialState?: I;
    }
  ): RenderResult & {
    store: Store<S, A>;
  };
}

export const renderWithRedux: RenderWithRedux = (
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};
