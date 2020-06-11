import { doShowLoading, doHideLoading } from 'app/ui/actions';
import { UIActionTypes } from 'app/ui/types';
import reducer from '.';

describe('loading reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      isVisible: false,
    };
    expect(reducer(undefined, {} as UIActionTypes)).toEqual(expectedState);
  });

  it('should handle LOADING_SHOW', () => {
    // Arrange
    const expectedState = {
      isVisible: true,
    };

    // Act
    const action = doShowLoading();

    // Assert
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOADING_HIDE', () => {
    // Arrange
    const expectedState = {
      isVisible: false,
    };

    // Act
    const action = doHideLoading();

    // Assert
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
