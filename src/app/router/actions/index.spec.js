import { doChangeLocation } from './index';
import { LOCATION_CHANGE } from '../constants/actionTypes';

describe('router actions', () => {
  it('should create doChangeLocation action', () => {
    const pathname = '/inicio';
    const expectedAction = {
      type: LOCATION_CHANGE,
      payload: {
        pathname,
      },
    };
    expect(doChangeLocation(pathname)).toEqual(expectedAction);
  });
});
