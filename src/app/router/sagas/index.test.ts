import { put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { push } from 'connected-react-router';
import { handleChangeLocation } from './index';
import { doChangeLocation } from '../actions';

describe('router sagas', () => {
  describe('handleChangeLocation', () => {
    const pathname = '/inicio';

    const action = doChangeLocation(pathname);
    const generator = cloneableGenerator(handleChangeLocation)(action);

    it('should redirect to a given pathname', () => {
      expect(generator.next().value).toEqual(put(push(pathname)));
    });
  });
});
