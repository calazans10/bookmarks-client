import {
  doShowAlert,
  doHideAlert,
  doShowConfirm,
  doHideConfirm,
  doShowLoading,
  doHideLoading,
  doHandleError,
} from './index';
import {
  ALERT_SHOW,
  ALERT_HIDE,
  CONFIRM_SHOW,
  CONFIRM_HIDE,
  LOADING_SHOW,
  LOADING_HIDE,
} from '../types';
import { LOGOUT_REQUEST } from '../../auth/types';

describe('ui actions', () => {
  it('should create doShowAlert action', () => {
    const message = 'Invalid credendials';
    const expectedAction = {
      type: ALERT_SHOW,
      payload: {
        message,
      },
    };
    expect(doShowAlert(message)).toEqual(expectedAction);
  });

  it('should create doHideAlert action', () => {
    const expectedAction = {
      type: ALERT_HIDE,
    };
    expect(doHideAlert()).toEqual(expectedAction);
  });

  it('should create doShowConfirm action', () => {
    const expectedAction = {
      type: CONFIRM_SHOW,
    };
    expect(doShowConfirm()).toEqual(expectedAction);
  });

  it('should create doHideConfirm action', () => {
    const expectedAction = {
      type: CONFIRM_HIDE,
    };
    expect(doHideConfirm()).toEqual(expectedAction);
  });

  it('should create doShowLoading action', () => {
    const expectedAction = {
      type: LOADING_SHOW,
    };
    expect(doShowLoading()).toEqual(expectedAction);
  });

  it('should create doHideLoading action', () => {
    const expectedAction = {
      type: LOADING_HIDE,
    };
    expect(doHideLoading()).toEqual(expectedAction);
  });

  describe('doHandleError', () => {
    it('should call show alert', () => {
      const err = new Error('some error');
      err.response = { data: { message: 'Invalid token' }, status: 400 };

      const expectedAction = {
        type: ALERT_SHOW,
        payload: {
          message: 'Invalid token',
        },
      };
      expect(doHandleError(err)).toEqual(expectedAction);
    });

    it('should call request logout', () => {
      const err = new Error('some error');
      err.response = { data: { message: 'Invalid credentials' }, status: 401 };

      const expectedAction = {
        type: LOGOUT_REQUEST,
      };
      expect(doHandleError(err)).toEqual(expectedAction);
    });
  });
});
