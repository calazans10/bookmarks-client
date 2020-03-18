import reducer from './index';
import { doShowLoading, doHideLoading } from '../../actions';
import { UIActionTypes } from '../../types';

describe('loading reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      isVisible: false,
    };
    expect(reducer(undefined, {} as UIActionTypes)).toEqual(expectedState);
  });

  it('should handle LOADING_SHOW', () => {
    const action = doShowLoading();
    const expectedState = {
      isVisible: true,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOADING_HIDE', () => {
    const action = doHideLoading();
    const expectedState = {
      isVisible: false,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
