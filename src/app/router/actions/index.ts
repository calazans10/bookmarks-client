import { LOCATION_CHANGE, RouterActionTypes } from 'app/router/types';

export const doChangeLocation = (pathname: string): RouterActionTypes => ({
  type: LOCATION_CHANGE,
  payload: {
    pathname,
  },
});
