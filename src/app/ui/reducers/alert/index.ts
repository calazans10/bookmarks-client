import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { AlertState, ALERT_SHOW, ALERT_HIDE } from 'app/ui/types';

const initialState: AlertState = {
  message: '',
  isVisible: false,
};

const applyShowAlert = (state: AlertState, action: PayloadAction<{ message: string }>) => {
  const { message } = action.payload;
  state.message = message;
  state.isVisible = true;
};

const applyHideAlert = () => ({
  message: '',
  isVisible: false,
});

const alertReducer = createReducer(initialState, {
  [ALERT_SHOW]: (state, action: PayloadAction<{ message: string }>) =>
    applyShowAlert(state, action),
  [ALERT_HIDE]: () => applyHideAlert(),
});

export default alertReducer;
