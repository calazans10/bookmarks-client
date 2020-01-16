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

const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALERT_SHOW:
      return applyShowAlert(state, action);
    case ALERT_HIDE:
      return applyHideAlert();
    default:
      return state;
  }
};

export default alertReducer;
