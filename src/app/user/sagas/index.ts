import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { doShowLoading, doHideLoading, doHideConfirm, doHandleError } from 'app/ui/actions';
import { doSuccessGetBookmarks, doSuccessDeleteBookmark } from 'app/user/actions';
import {
  requestGetBookmarks,
  requestCreateBookmark,
  requestUpdateBookmark,
  requestDeleteBookmark,
} from 'app/user/api';
import {
  GET_BOOKMARKS_REQUEST,
  CREATE_BOOKMARK_REQUEST,
  UPDATE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_REQUEST,
  Bookmark,
  Meta,
  RequestGetBookmarksAction,
  RequestCreateBookmarkAction,
  RequestUpdateBookmarkAction,
  RequestDeleteBookmarkAction,
} from 'app/user/types';

export function* handleRequestGetBookmarks(action: RequestGetBookmarksAction) {
  try {
    const { offset, limit } = action.payload;
    yield put(doShowLoading());
    const { meta, data }: { meta: Meta; data: Bookmark[] } = yield call(
      requestGetBookmarks,
      offset,
      limit
    );
    yield put(doSuccessGetBookmarks(meta, data));
  } catch (e) {
    yield put(doHandleError(e));
  } finally {
    yield put(doHideLoading());
  }
}

export function* handleRequestCreateBookmark(action: RequestCreateBookmarkAction) {
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

export function* handleRequestUpdateBookmark(action: RequestUpdateBookmarkAction) {
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

export function* handleRequestDeleteBookmark(action: RequestDeleteBookmarkAction) {
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
  takeLatest(GET_BOOKMARKS_REQUEST, handleRequestGetBookmarks),
  takeLatest(CREATE_BOOKMARK_REQUEST, handleRequestCreateBookmark),
  takeLatest(UPDATE_BOOKMARK_REQUEST, handleRequestUpdateBookmark),
  takeLatest(DELETE_BOOKMARK_REQUEST, handleRequestDeleteBookmark),
];
