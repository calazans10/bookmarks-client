import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { doSuccessGetMyBookmarks, doSuccessDeleteBookmark } from '../actions';
import {
  requestGetMyBookmarks,
  requestCreateBookmark,
  requestUpdateBookmark,
  requestDeleteBookmark,
} from '../api';
import { doShowLoading, doHideLoading, doHideConfirm, doHandleError } from '../../ui/actions';
import {
  GET_MY_BOOKMARKS_REQUEST,
  CREATE_BOOKMARK_REQUEST,
  UPDATE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_REQUEST,
} from '../constants/actionTypes';

export function* handleRequestGetMyBookmarks(action) {
  try {
    const { offset, limit } = action.payload;
    yield put(doShowLoading());
    const { meta, data } = yield call(requestGetMyBookmarks, offset, limit);
    yield put(doSuccessGetMyBookmarks(meta, data));
  } catch (e) {
    yield put(doHandleError(e));
  } finally {
    yield put(doHideLoading());
  }
}

export function* handleRequestCreateBookmark(action) {
  try {
    const { data } = action.payload;
    yield put(doShowLoading());
    yield call(requestCreateBookmark, data);
    yield put(push('/bookmarks'));
  } catch (e) {
    yield put(doHandleError(e));
  } finally {
    yield put(doHideLoading());
  }
}

export function* handleRequestUpdateBookmark(action) {
  try {
    const { bookmarkId, data } = action.payload;
    yield put(doShowLoading());
    yield call(requestUpdateBookmark, bookmarkId, data);
    yield put(push('/bookmarks'));
  } catch (e) {
    yield put(doHandleError(e));
  } finally {
    yield put(doHideLoading());
  }
}

export function* handleRequestDeleteBookmark(action) {
  try {
    const { bookmarkId } = action.payload;
    yield put(doHideConfirm());
    yield put(doShowLoading());
    yield call(requestDeleteBookmark, bookmarkId);
    yield put(doSuccessDeleteBookmark(bookmarkId));
  } catch (e) {
    yield put(doHandleError(e));
  } finally {
    yield put(doHideLoading());
  }
}

export default [
  takeLatest(GET_MY_BOOKMARKS_REQUEST, handleRequestGetMyBookmarks),
  takeLatest(CREATE_BOOKMARK_REQUEST, handleRequestCreateBookmark),
  takeLatest(UPDATE_BOOKMARK_REQUEST, handleRequestUpdateBookmark),
  takeLatest(DELETE_BOOKMARK_REQUEST, handleRequestDeleteBookmark),
];
