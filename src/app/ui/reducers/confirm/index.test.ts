import reducer from './index';
import { doShowConfirm, doHideConfirm } from '../../actions';
import { UIActionTypes } from '../../types';

describe('loading reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      isVisible: false,
    };
    expect(reducer(undefined, {} as UIActionTypes)).toEqual(expectedState);
  });

  it('should handle CONFIRM_SHOW', () => {
    const action = doShowConfirm();
    const expectedState = {
      isVisible: true,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CONFIRM_HIDE', () => {
    const action = doHideConfirm();
    const expectedState = {
      isVisible: false,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
