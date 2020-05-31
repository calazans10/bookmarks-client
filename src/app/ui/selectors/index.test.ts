import { isAlertVisible, getAlertMessage, isLoadingVisible, isConfirmVisible } from './index';

describe('ui selectors', () => {
  const state = {
    ui: {
      alert: {
        message: '',
        isVisible: false,
      },
      loading: {
        isVisible: true,
      },
      confirm: {
        isVisible: false,
      },
    },
  };

  it('should create a selector that returns if an alert is visible', () => {
    expect(isAlertVisible(state)).toEqual(false);
  });

  it('should create a selector that returns an alert message', () => {
    expect(getAlertMessage(state)).toEqual('');
  });

  it('should create a selector that returns if a loading is visible', () => {
    expect(isLoadingVisible(state)).toEqual(true);
  });

  it('should create a selector that returns if a confirmation is visible', () => {
    expect(isConfirmVisible(state)).toEqual(false);
  });
});
