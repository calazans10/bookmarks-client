export const ALERT_SHOW = 'ALERT_SHOW';
export const ALERT_HIDE = 'ALERT_HIDE';
export const CONFIRM_SHOW = 'CONFIRM_SHOW';
export const CONFIRM_HIDE = 'CONFIRM_HIDE';
export const LOADING_SHOW = 'LOADING_SHOW';
export const LOADING_HIDE = 'LOADING_HIDE';

export interface AlertState {
  message: string;
  isVisible: boolean;
}

export interface ConfirmState {
  isVisible: boolean;
}

export interface LoadingState {
  isVisible: boolean;
}

export interface UISelector {
  ui: {
    alert: AlertState;
    confirm: ConfirmState;
    loading: LoadingState;
  };
}

interface ShowAlertAction {
  type: typeof ALERT_SHOW;
  payload: {
    message: string;
  };
}

interface HideAlertAction {
  type: typeof ALERT_HIDE;
}

interface ShowConfirmAction {
  type: typeof CONFIRM_SHOW;
}

interface HideConfirmAction {
  type: typeof CONFIRM_HIDE;
}

interface ShowLoadingAction {
  type: typeof LOADING_SHOW;
}

interface HideLoadingAction {
  type: typeof LOADING_HIDE;
}

export type UIActionTypes =
  | ShowAlertAction
  | HideAlertAction
  | ShowConfirmAction
  | HideConfirmAction
  | ShowLoadingAction
  | HideLoadingAction;
