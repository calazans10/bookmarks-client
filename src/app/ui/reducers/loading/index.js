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

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_SHOW:
      return applyShowLoading();
    case LOADING_HIDE:
      return applyHideLoading();
    default:
      return state;
  }
};

export default loadingReducer;
