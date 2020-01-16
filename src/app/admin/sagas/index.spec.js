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

describe('admin sagas', () => {
  describe('handleRequestGetBookmarks', () => {
    const offset = 0;
    const limit = 10;

    const action = doRequestGetBookmarks(offset, limit);
    const generator = cloneableGenerator(handleRequestGetBookmarks)(action);

    expect(generator.next().value).toEqual(put(doShowLoading()));
    expect(generator.next().value).toEqual(call(requestGetBookmarks, offset, limit));

    describe('when is success', () => {
      const meta = {
        count: 1,
        limit: 10,
        offset: 1,
        total: 1,
      };

      const data = [
        {
          id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
          url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
          title: 'Introducing the React RFC Process',
          user: {
            id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
            name: 'John Doe',
            email: 'john.doe@example.com',
            is_admin: false,
          },
        },
      ];

      const clone = generator.clone();

      it('should dispatch doSuccessGetBookmarks', () => {
        expect(clone.next({ meta, data }).value).toEqual(put(doSuccessGetBookmarks(meta, data)));
      });

      it('should dispatch doHideLoading', () => {
        expect(clone.next().value).toEqual(put(doHideLoading()));
      });
    });

    describe('when is not success', () => {
      const clone = generator.clone();

      it('should display an error message', () => {
        const message = 'Invalid credentials';

        const err = new Error('some error');
        err.response = { data: { message } };

        expect(clone.throw(err).value).toEqual(put(doHandleError(err)));
      });

      it('should dispatch doHideLoading', () => {
        expect(clone.next().value).toEqual(put(doHideLoading()));
      });
    });
  });

  describe('handleRequestGetUsers', () => {
    const offset = 0;
    const limit = 10;

    const action = doRequestGetUsers(offset, limit);
    const generator = cloneableGenerator(handleRequestGetUsers)(action);

    expect(generator.next().value).toEqual(put(doShowLoading()));
    expect(generator.next().value).toEqual(call(requestGetUsers, offset, limit));

    describe('when is success', () => {
      const meta = {
        count: 1,
        limit: 10,
        offset: 1,
        total: 1,
      };

      const data = [
        {
          id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
          name: 'John Doe',
          email: 'john.doe@example.com',
          is_admin: false,
        },
      ];

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
        const message = 'Invalid credentials';

        const err = new Error('some error');
        err.response = { data: { message } };

        expect(clone.throw(err).value).toEqual(put(doHandleError(err)));
      });

      it('should dispatch doHideLoading', () => {
        expect(clone.next().value).toEqual(put(doHideLoading()));
      });
    });
  });
});
