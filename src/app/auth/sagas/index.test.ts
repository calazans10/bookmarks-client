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
import { users } from '../../../fixtures';

describe('auth sagas', () => {
  describe('handleRequestLogin', () => {
    const email = 'admin@example.com';
    const password = '1234';
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhOTA3NTRiMy04NjdjLTRiNjQtODk2MS1kNjJhZGE2OTkxODciLCJpYXQiOjE1OTA5MzE1NjMsImV4cCI6MTU5MDkzNTE2M30.oEvybQBuSwwf2XLHlSaqwAQGRq9jZOLP5oJMj219ePQ';

    const action = doRequestLogin(email, password);
    const generator = cloneableGenerator(handleRequestLogin)(action);

    expect(generator.next().value).toEqual(put(doShowLoading()));
    expect(generator.next().value).toEqual(call(requestLogin, { auth: { email, password } }));
    expect(generator.next({ jwt: token }).value).toEqual(
      call([sessionStorage, 'setItem'], 'token', token)
    );
    expect(generator.next().value).toEqual(call(requestGetCurrentUser));

    describe('when is success', () => {
      describe('and user is admin', () => {
        const clone = generator.clone();

        it('should dispatch doSuccessLogin', () => {
          const response = users[0];
          expect(clone.next(response).value).toEqual(put(doSuccessLogin(response, token)));
        });

        it('should redirect to "/admin/bookmarks"', () => {
          expect(clone.next().value).toEqual(put(push('/admin/bookmarks')));
        });

        it('should dispatch doHideLoading', () => {
          expect(clone.next().value).toEqual(put(doHideLoading()));
        });
      });

      describe('and user is not admin', () => {
        const clone = generator.clone();

        it('should dispatch doSuccessLogin', () => {
          const response = users[1];
          expect(clone.next(response).value).toEqual(put(doSuccessLogin(response, token)));
        });

        it('should redirect to "/bookmarks"', () => {
          expect(clone.next().value).toEqual(put(push('/bookmarks')));
        });

        it('should dispatch doHideLoading', () => {
          expect(clone.next().value).toEqual(put(doHideLoading()));
        });
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
    const name = 'Justin Thomas';
    const email = 'justin.thomas@example.com';
    const password = '1234';
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhMTM5YjA3My03ZTBlLTQzZTMtYTViZC04ZDIzNWY2MWQ1NmMiLCJpYXQiOjE1OTA5MzY4NzcsImV4cCI6MTU5MDk0MDQ3N30.Op2j4SmQjBHtl13Vm_fb6pWgNK9i9agkMAqpTPuFIww';

    const response = {
      id: 'da20ff85-e58f-499c-8572-48479af0d10a',
      name: 'Justin Thomas',
      email: 'justin.thomas@example.com',
      is_admin: false,
      password_digest: '$2a$12$uI33eoOlnEiwMIVSiS8Ti.kfEYF.r9lfYfLY3Z6YjB/mQa0M8VF2a',
      created_at: '2020-02-05T22:29:33.031Z',
      updated_at: '2020-02-05T22:29:33.031Z',
      bookmarks_count: 0,
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
