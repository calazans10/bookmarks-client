export const ALERT_SHOW = 'ui/ALERT_SHOW';
export const ALERT_HIDE = 'ui/ALERT_HIDE';
export const CONFIRM_SHOW = 'ui/CONFIRM_SHOW';
export const CONFIRM_HIDE = 'ui/CONFIRM_HIDE';
export const LOADING_SHOW = 'ui/LOADING_SHOW';
export const LOADING_HIDE = 'ui/LOADING_HIDE';

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
