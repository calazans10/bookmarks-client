import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { doSuccessLogin, doSuccessLogout } from '../actions';
import { requestLogin, requestRegistration, requestGetCurrentUser } from '../api';
import { doShowAlert, doShowLoading, doHideLoading } from '../../ui/actions';
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTRATION_REQUEST,
  User,
  RequestLoginAction,
  RequestRegistrationAction,
} from '../types';

export function* handleRequestLogin(action: RequestLoginAction) {
  try {
    yield put(doShowLoading());
    const { jwt: token }: { jwt: string } = yield call(requestLogin, action.payload);
    yield call([sessionStorage, 'setItem'], 'token', token);
    const response: User = yield call(requestGetCurrentUser);
    yield put(doSuccessLogin(response, token));
    if (response.is_admin) {
      yield put(push('/admin/bookmarks'));
    } else {
      yield put(push('/bookmarks'));
    }
  } catch (e) {
    yield put(doShowAlert('Incorrect email or password.'));
  } finally {
    yield put(doHideLoading());
  }
}

export function* handleRequestLogout() {
  yield put(doShowLoading());
  yield call([sessionStorage, 'clear']);
  yield put(doSuccessLogout());
  yield put(push('/'));
  yield put(doHideLoading());
}

export function* handleRequestRegistration(action: RequestRegistrationAction) {
  try {
    const { name, email, password } = action.payload;
    yield put(doShowLoading());
    const response: User = yield call(requestRegistration, { name, email, password });
    const { jwt: token }: { jwt: string } = yield call(requestLogin, { auth: { email, password } });
    yield call([sessionStorage, 'setItem'], 'token', token);
    yield put(doSuccessLogin(response, token));
    yield put(push('/bookmarks'));
  } catch (e) {
    const { message } = e.response.data;
    yield put(doShowAlert(message));
  } finally {
    yield put(doHideLoading());
  }
}

export default [
  takeLatest(LOGIN_REQUEST, handleRequestLogin),
  takeLatest(LOGOUT_REQUEST, handleRequestLogout),
  takeLatest(REGISTRATION_REQUEST, handleRequestRegistration),
];
