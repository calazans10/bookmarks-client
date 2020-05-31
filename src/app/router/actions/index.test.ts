import { LOCATION_CHANGE } from 'app/router/types';
import { doChangeLocation } from './';

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
