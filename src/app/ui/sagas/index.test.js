import { put, delay } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { handleRequestLoading } from './index';
import { doShowLoading, doHideLoading, doRequestLoading } from '../actions';

describe('ui sagas', () => {
  describe('handleRequestLoading', () => {
    const action = doRequestLoading();
    const generator = cloneableGenerator(handleRequestLoading)(action);

    it('should dispatch doShowLoading', () => {
      expect(generator.next().value).toEqual(put(doShowLoading()));
    });

    it('should delay for a second', () => {
      expect(generator.next().value).toEqual(delay(1000));
    });

    it('should dispatch doHideLoading', () => {
      expect(generator.next().value).toEqual(put(doHideLoading()));
    });
  });
});
