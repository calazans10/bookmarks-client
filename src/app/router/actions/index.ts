import { createAction } from '@reduxjs/toolkit';
import { LOCATION_CHANGE } from '../constants/actionTypes';

export const doChangeLocation = createAction(LOCATION_CHANGE, pathname => ({
  payload: {
    pathname,
  },
}));
