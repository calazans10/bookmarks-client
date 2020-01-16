import {
  ALERT_SHOW,
  ALERT_HIDE,
  CONFIRM_SHOW,
  CONFIRM_HIDE,
  LOADING_SHOW,
  LOADING_HIDE,
  LOADING_REQUEST,
} from '../constants/actionTypes';
import { LOGOUT_REQUEST } from '../../auth/constants/actionTypes';

export const doShowAlert = message => ({
  type: ALERT_SHOW,
  payload: {
    message,
  },
});

export const doHideAlert = () => ({
  type: ALERT_HIDE,
});

export const doShowConfirm = () => ({
  type: CONFIRM_SHOW,
});

export const doHideConfirm = () => ({
  type: CONFIRM_HIDE,
});

export const doShowLoading = () => ({
  type: LOADING_SHOW,
});

export const doHideLoading = () => ({
  type: LOADING_HIDE,
});

export const doRequestLoading = () => ({
  type: LOADING_REQUEST,
});

export const doHandleError = error => {
  let statusCode = 500;
  let errorMessage = 'The operation could not be completed. Please try again later.';

  if (error) {
    if (error.response) {
      if (error.response.status) {
        statusCode = error.response.status;
      }

      if (error.response.data) {
        if (error.response.data.message) {
          errorMessage = error.response.data.message;
        } else {
          errorMessage = error.response.data;
        }
      }
    } else if (error.message) {
      errorMessage = error.message;
    }
  }

  if (statusCode === 401) {
    return { type: LOGOUT_REQUEST };
  }

  return doShowAlert(errorMessage);
};
