import { put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { push } from 'connected-react-router';
import { doChangeLocation } from 'app/router/actions';
import { handleChangeLocation } from '.';

describe('router sagas', () => {
  describe('handleChangeLocation', () => {
    const pathname = '/home';

    const action = doChangeLocation(pathname);
    const generator = cloneableGenerator(handleChangeLocation)(action);

    it('should redirect to a given pathname', () => {
      expect(generator.next().value).toEqual(put(push(pathname)));
    });
  });
});
