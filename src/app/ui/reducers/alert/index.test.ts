import { doShowAlert, doHideAlert } from 'app/ui/actions';
import { UIActionTypes } from 'app/ui/types';
import reducer from '.';

describe('alert reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      message: '',
      isVisible: false,
    };
    expect(reducer(undefined, {} as UIActionTypes)).toEqual(expectedState);
  });

  it('should handle ALERT_SHOW', () => {
    // Arrange
    const message = 'Invalid credentials';

    const expectedState = {
      message,
      isVisible: true,
    };

    // Act
    const action = doShowAlert(message);

    // Assert
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ALERT_HIDE', () => {
    // Arrange
    const expectedState = {
      message: '',
      isVisible: false,
    };

    // Act
    const action = doHideAlert();

    // Assert
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
