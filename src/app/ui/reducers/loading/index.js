import { createReducer } from '@reduxjs/toolkit';
import { LOADING_SHOW, LOADING_HIDE } from '../../constants/actionTypes';

const INITIAL_STATE = {
  isVisible: false,
};

const applyShowLoading = () => ({
  isVisible: true,
});

const applyHideLoading = () => ({
  isVisible: false,
});

const loadingReducer = createReducer(INITIAL_STATE, {
  [LOADING_SHOW]: () => applyShowLoading(),
  [LOADING_HIDE]: () => applyHideLoading(),
});

export default loadingReducer;
