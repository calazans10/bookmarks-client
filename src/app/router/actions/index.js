import { LOCATION_CHANGE } from '../constants/actionTypes';

export const doChangeLocation = pathname => ({
  type: LOCATION_CHANGE,
  payload: {
    pathname,
  },
});
