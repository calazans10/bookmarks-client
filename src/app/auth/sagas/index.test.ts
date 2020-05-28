import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { handleRequestLogin, handleRequestLogout, handleRequestRegistration } from './index';
import {
  doRequestLogin,
  doSuccessLogin,
  doRequestLogout,
  doSuccessLogout,
  doRequestRegistration,
} from '../actions';
import { doShowAlert, doShowLoading, doHideLoading } from '../../ui/actions';
import { requestLogin, requestRegistration, requestGetCurrentUser } from '../api';

describe('auth sagas', () => {
  describe('handleRequestLogin', () => {
    const email = 'john.doe@example.com';
    const password = '1234';
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    const action = doRequestLogin(email, password);
    const generator = cloneableGenerator(handleRequestLogin)(action);

    expect(generator.next().value).toEqual(put(doShowLoading()));
    expect(generator.next().value).toEqual(call(requestLogin, { auth: { email, password } }));
    expect(generator.next({ jwt: token }).value).toEqual(
      call([sessionStorage, 'setItem'], 'token', token)
    );
    expect(generator.next().value).toEqual(call(requestGetCurrentUser));

    describe('when is success', () => {
      const clone = generator.clone();

      it('should dispatch doSuccessLogin', () => {
        const response = {
          name: 'John Doe',
          email: 'john.doe@example.com',
          is_admin: false,
        };

        expect(clone.next(response).value).toEqual(put(doSuccessLogin(response, token)));
      });

      it('should redirect to "/bookmarks"', () => {
        expect(clone.next().value).toEqual(put(push('/bookmarks')));
      });

      it('should dispatch doHideLoading', () => {
        expect(clone.next().value).toEqual(put(doHideLoading()));
      });
    });

    describe('when is not success', () => {
      const clone = generator.clone();

      it('should display an error message', () => {
        const err = new Error('some error');
        err.response = { data: { message: 'Incorrect email or password.' } };
        expect(clone.throw(err).value).toEqual(put(doShowAlert(err.response.data.message)));
      });

      it('should dispatch doHideLoading', () => {
        expect(clone.next().value).toEqual(put(doHideLoading()));
      });
    });
  });

  describe('handleRequestLogout', () => {
    const action = doRequestLogout();
    const generator = cloneableGenerator(handleRequestLogout)(action);

    it('should dispatch doShowLoading', () => {
      expect(generator.next().value).toEqual(put(doShowLoading()));
    });

    it('should call sessionStorage.clear', () => {
      expect(generator.next().value).toEqual(call([sessionStorage, 'clear']));
    });

    it('should dispatch doSuccessLogout', () => {
      expect(generator.next().value).toEqual(put(doSuccessLogout()));
    });

    it('should redirect to "/"', () => {
      expect(generator.next().value).toEqual(put(push('/')));
    });

    it('should dispatch doHideLoading', () => {
      expect(generator.next().value).toEqual(put(doHideLoading()));
    });
  });

  describe('handleRequestRegistration', () => {
    const name = 'John Doe';
    const email = 'john.doe@example.com';
    const password = '1234';
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const response = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      is_admin: false,
    };

    const action = doRequestRegistration(name, email, password);
    const generator = cloneableGenerator(handleRequestRegistration)(action);

    expect(generator.next().value).toEqual(put(doShowLoading()));
    expect(generator.next().value).toEqual(call(requestRegistration, { name, email, password }));
    expect(generator.next(response).value).toEqual(
      call(requestLogin, { auth: { email, password } })
    );

    describe('when is success', () => {
      const clone = generator.clone();

      it('should call sessionStorage.setItem', () => {
        expect(clone.next({ jwt: token }).value).toEqual(
          call([sessionStorage, 'setItem'], 'token', token)
        );
      });

      it('should dispatch doSuccessLogin', () => {
        expect(clone.next().value).toEqual(put(doSuccessLogin(response, token)));
      });

      it('should redirect to "/bookmarks"', () => {
        expect(clone.next().value).toEqual(put(push('/bookmarks')));
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
        expect(clone.throw(err).value).toEqual(put(doShowAlert(err.response.data.message)));
      });

      it('should dispatch doHideLoading', () => {
        expect(clone.next().value).toEqual(put(doHideLoading()));
      });
    });
  });
});
