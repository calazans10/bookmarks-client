import { takeLatest, put, call } from 'redux-saga/effects';
import { doSuccessGetBookmarks, doSuccessGetUsers } from '../actions';
import { requestGetBookmarks, requestGetUsers } from '../api';
import { doShowLoading, doHideLoading, doHandleError } from '../../ui/actions';
import { GET_USERS_REQUEST, GET_BOOKMARKS_REQUEST } from '../constants/actionTypes';

export function* handleRequestGetBookmarks(action) {
  try {
    const { offset, limit } = action.payload;
    yield put(doShowLoading());
    const { meta, data } = yield call(requestGetBookmarks, offset, limit);
    yield put(doSuccessGetBookmarks(meta, data));
  } catch (e) {
    yield put(doHandleError(e));
  } finally {
    yield put(doHideLoading());
  }
}

export function* handleRequestGetUsers(action) {
  try {
    const { offset, limit } = action.payload;
    yield put(doShowLoading());
    const { meta, data } = yield call(requestGetUsers, offset, limit);
    yield put(doSuccessGetUsers(meta, data));
  } catch (e) {
    yield put(doHandleError(e));
  } finally {
    yield put(doHideLoading());
  }
}

export default [
  takeLatest(GET_BOOKMARKS_REQUEST, handleRequestGetBookmarks),
  takeLatest(GET_USERS_REQUEST, handleRequestGetUsers),
];
