export const LOCATION_CHANGE = 'LOCATION_CHANGE';

interface ChangeLocationAction {
  type: typeof LOCATION_CHANGE;
  payload: {
    pathname: string;
  };
}

export type RouterActionTypes = ChangeLocationAction;
