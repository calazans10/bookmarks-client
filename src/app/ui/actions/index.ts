import { AxiosError } from 'axios';
import {
  ALERT_SHOW,
  ALERT_HIDE,
  CONFIRM_SHOW,
  CONFIRM_HIDE,
  LOADING_SHOW,
  LOADING_HIDE,
  LOADING_REQUEST,
  UIActionTypes,
} from '../types';
import { doRequestLogout } from '../../auth/actions';

export const doShowAlert = (message: string): UIActionTypes => ({
  type: ALERT_SHOW,
  payload: {
    message,
  },
});

export const doHideAlert = (): UIActionTypes => ({
  type: ALERT_HIDE,
});

export const doShowConfirm = (): UIActionTypes => ({
  type: CONFIRM_SHOW,
});

export const doHideConfirm = (): UIActionTypes => ({
  type: CONFIRM_HIDE,
});

export const doShowLoading = (): UIActionTypes => ({
  type: LOADING_SHOW,
});

export const doHideLoading = (): UIActionTypes => ({
  type: LOADING_HIDE,
});

export const doRequestLoading = (): UIActionTypes => ({
  type: LOADING_REQUEST,
});

export const doHandleError = (error: AxiosError) => {
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
