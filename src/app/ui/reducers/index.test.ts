import reducer from './index';
import { UIActionTypes } from '../types';

describe('ui reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      alert: {
        message: '',
        isVisible: false,
      },
      loading: {
        isVisible: false,
      },
      confirm: {
        isVisible: false,
      },
    };
    expect(reducer(undefined, {} as UIActionTypes)).toEqual(expectedState);
  });
});
