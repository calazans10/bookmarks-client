import { createReducer } from '@reduxjs/toolkit';
import { LoadingState, LOADING_SHOW, LOADING_HIDE } from '../../types';

const initialState: LoadingState = {
  isVisible: false,
};

const applyShowLoading = () => ({
  isVisible: true,
});

const applyHideLoading = () => ({
  isVisible: false,
});

const loadingReducer = createReducer(initialState, {
  [LOADING_SHOW]: () => applyShowLoading(),
  [LOADING_HIDE]: () => applyHideLoading(),
});

export default loadingReducer;
