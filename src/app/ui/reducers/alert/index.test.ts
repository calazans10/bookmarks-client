import reducer from './index';
import { doShowAlert, doHideAlert } from '../../actions';
import { UIActionTypes } from '../../types';

describe('alert reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      message: '',
      isVisible: false,
    };
    expect(reducer(undefined, {} as UIActionTypes)).toEqual(expectedState);
  });

  it('should handle ALERT_SHOW', () => {
    const message = 'Invalid credentials';
    const action = doShowAlert(message);
    const expectedState = {
      message,
      isVisible: true,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ALERT_HIDE', () => {
    const action = doHideAlert();
    const expectedState = {
      message: '',
      isVisible: false,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
