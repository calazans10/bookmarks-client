import { createAction } from '@reduxjs/toolkit';
import {
  ALERT_SHOW,
  ALERT_HIDE,
  CONFIRM_SHOW,
  CONFIRM_HIDE,
  LOADING_SHOW,
  LOADING_HIDE,
  LOADING_REQUEST,
} from '../constants/actionTypes';
import { doRequestLogout } from '../../auth/actions';

export const doShowAlert = createAction(ALERT_SHOW, message => ({
  payload: {
    message,
  },
}));

export const doHideAlert = createAction(ALERT_HIDE);

export const doShowConfirm = createAction(CONFIRM_SHOW);

export const doHideConfirm = createAction(CONFIRM_HIDE);

export const doShowLoading = createAction(LOADING_SHOW);

export const doHideLoading = createAction(LOADING_HIDE);

export const doRequestLoading = createAction(LOADING_REQUEST);

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
    return doRequestLogout();
  }

  return doShowAlert(errorMessage);
};
