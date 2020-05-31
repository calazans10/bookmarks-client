import { doChangeLocation } from './index';
import { LOCATION_CHANGE } from '../types';

describe('router actions', () => {
  it('should create doChangeLocation action', () => {
    const pathname = '/home';
    const expectedAction = {
      type: LOCATION_CHANGE,
      payload: {
        pathname,
      },
    };
    expect(doChangeLocation(pathname)).toEqual(expectedAction);
  });
});
