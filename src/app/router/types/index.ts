export const LOCATION_CHANGE = 'router/LOCATION_CHANGE';

export interface ChangeLocationAction {
  type: typeof LOCATION_CHANGE;
  payload: {
    pathname: string;
  };
}

export type RouterActionTypes = ChangeLocationAction;
