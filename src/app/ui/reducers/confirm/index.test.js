import reducer from './index';
import { doShowConfirm, doHideConfirm } from '../../actions';

describe('loading reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      isVisible: false,
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
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
