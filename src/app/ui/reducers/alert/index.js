import { createReducer } from '@reduxjs/toolkit';
import { ALERT_SHOW, ALERT_HIDE } from '../../constants/actionTypes';

const INITIAL_STATE = {
  message: '',
  isVisible: false,
};

const applyShowAlert = (state, action) => {
  const { message } = action.payload;
  return { ...state, message, isVisible: true };
};

const applyHideAlert = () => ({
  message: '',
  isVisible: false,
});

const alertReducer = createReducer(INITIAL_STATE, {
  [ALERT_SHOW]: (state, action) => applyShowAlert(state, action),
  [ALERT_HIDE]: () => applyHideAlert(),
});

export default alertReducer;
