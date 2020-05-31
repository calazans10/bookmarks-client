import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { handleRequestGetBookmarks, handleRequestGetUsers } from './index';
import {
  doRequestGetBookmarks,
  doSuccessGetBookmarks,
  doRequestGetUsers,
  doSuccessGetUsers,
} from '../actions';
import { doShowLoading, doHideLoading, doHandleError } from '../../ui/actions';
import { requestGetBookmarks, requestGetUsers } from '../api';
import { bookmarks, users } from '../../../fixtures';

describe('admin sagas', () => {
  describe('handleRequestGetBookmarks', () => {
    const offset = 1;
    const limit = 10;

    const action = doRequestGetBookmarks(offset, limit);
    const generator = cloneableGenerator(handleRequestGetBookmarks)(action);

    expect(generator.next().value).toEqual(put(doShowLoading()));
    expect(generator.next().value).toEqual(call(requestGetBookmarks, offset, limit));

    describe('when is success', () => {
      const meta = {
        count: bookmarks.length,
        offset,
        limit,
        total: bookmarks.length,
      };

      const clone = generator.clone();

      it('should dispatch doSuccessGetBookmarks', () => {
        const response = {
          meta,
          data: bookmarks,
        };
        expect(clone.next(response).value).toEqual(put(doSuccessGetBookmarks(meta, bookmarks)));
      });

      it('should dispatch doHideLoading', () => {
        expect(clone.next().value).toEqual(put(doHideLoading()));
      });
    });

    describe('when is not success', () => {
      const clone = generator.clone();

      it('should display an error message', () => {
        const err = new Error('some error');
        err.response = { data: { message: 'Invalid credendials' } };
        expect(clone.throw(err).value).toEqual(put(doHandleError(err)));
      });

      it('should dispatch doHideLoading', () => {
        expect(clone.next().value).toEqual(put(doHideLoading()));
      });
    });
  });

  describe('handleRequestGetUsers', () => {
    const offset = 1;
    const limit = 10;
    const data = users.filter(user => !user.is_admin);

    const action = doRequestGetUsers(offset, limit);
    const generator = cloneableGenerator(handleRequestGetUsers)(action);

    expect(generator.next().value).toEqual(put(doShowLoading()));
    expect(generator.next().value).toEqual(call(requestGetUsers, offset, limit));

    describe('when is success', () => {
      const meta = {
        count: data.length,
        offset,
        limit,
        total: data.length,
      };

      const clone = generator.clone();

      it('should dispatch doSuccessGetUsers', () => {
        expect(clone.next({ meta, data }).value).toEqual(put(doSuccessGetUsers(meta, data)));
      });

      it('should dispatch doHideLoading', () => {
        expect(clone.next().value).toEqual(put(doHideLoading()));
      });
    });

    describe('when is not success', () => {
      const clone = generator.clone();

      it('should display an error message', () => {
        const err = new Error('some error');
        err.response = { data: { message: 'Invalid credendials' } };
        expect(clone.throw(err).value).toEqual(put(doHandleError(err)));
      });

      it('should dispatch doHideLoading', () => {
        expect(clone.next().value).toEqual(put(doHideLoading()));
      });
    });
  });
});
