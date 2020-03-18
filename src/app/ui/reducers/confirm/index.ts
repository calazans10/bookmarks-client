import { createReducer } from '@reduxjs/toolkit';
import { ConfirmState, CONFIRM_SHOW, CONFIRM_HIDE } from '../../types';

const initialState: ConfirmState = {
  isVisible: false,
};

const applyShowConfirm = () => ({
  isVisible: true,
});

const applyHideConfirm = () => ({
  isVisible: false,
});

const confirmReducer = createReducer(initialState, {
  [CONFIRM_SHOW]: () => applyShowConfirm(),
  [CONFIRM_HIDE]: () => applyHideConfirm(),
});

export default confirmReducer;
