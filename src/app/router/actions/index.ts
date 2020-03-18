import { LOCATION_CHANGE, RouterActionTypes } from '../types';

export const doChangeLocation = (pathname: string): RouterActionTypes => ({
  type: LOCATION_CHANGE,
  payload: {
    pathname,
  },
});
