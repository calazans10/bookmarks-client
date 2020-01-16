import appReducer from './app';
import { LOGOUT_SUCCESS } from '../app/auth/constants/actionTypes';

const rootReducer = (state, action) => {
  let initialState = state;

  if (action.type === LOGOUT_SUCCESS) {
    initialState = undefined;
  }

  return appReducer(initialState, action);
};

export default rootReducer;
