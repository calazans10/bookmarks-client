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

const confirmReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONFIRM_SHOW:
      return applyShowConfirm();
    case CONFIRM_HIDE:
      return applyHideConfirm();
    default:
      return state;
  }
};

export default confirmReducer;
