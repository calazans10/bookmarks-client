import reducer from './index';

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
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
});
