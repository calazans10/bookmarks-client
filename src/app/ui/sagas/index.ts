import { takeLatest, put, delay } from 'redux-saga/effects';
import { doShowLoading, doHideLoading } from '../actions';
import { LOADING_REQUEST } from '../types';

export function* handleRequestLoading() {
  yield put(doShowLoading());
  yield delay(1000);
  yield put(doHideLoading());
}

export default [takeLatest(LOADING_REQUEST, handleRequestLoading)];
