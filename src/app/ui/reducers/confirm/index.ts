import { createReducer } from '@reduxjs/toolkit';
import { CONFIRM_SHOW, CONFIRM_HIDE } from '../../constants/actionTypes';

const INITIAL_STATE = {
  isVisible: false,
};

const applyShowConfirm = () => ({
  isVisible: true,
});

const applyHideConfirm = () => ({
  isVisible: false,
});

const confirmReducer = createReducer(INITIAL_STATE, {
  [CONFIRM_SHOW]: () => applyShowConfirm(),
  [CONFIRM_HIDE]: () => applyHideConfirm(),
});

export default confirmReducer;
