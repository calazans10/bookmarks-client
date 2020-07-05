import { Action } from 'redux';
import { LOGOUT_SUCCESS } from 'app/auth/types';
import appReducer, { AppState } from './app';

type RootState = AppState | undefined;

const rootReducer = (state: RootState, action: Action) => {
  let initialState = state;

  if (action.type === LOGOUT_SUCCESS) {
    initialState = undefined;
  }

  return appReducer(initialState, action);
};

export default rootReducer;
