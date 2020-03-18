import { combineReducers } from 'redux';
import alertReducer from './alert';
import confirmReducer from './confirm';
import loadingReducer from './loading';

const uiReducer = combineReducers({
  alert: alertReducer,
  confirm: confirmReducer,
  loading: loadingReducer,
});

export type UIState = ReturnType<typeof uiReducer>;

export default uiReducer;
