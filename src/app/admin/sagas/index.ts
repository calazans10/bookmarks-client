import { takeLatest, put, call } from 'redux-saga/effects';
import { doSuccessGetBookmarks, doSuccessGetUsers } from 'app/admin/actions';
import { doShowLoading, doHideLoading, doHandleError } from 'app/ui/actions';
import { requestGetBookmarks, requestGetUsers } from 'app/admin/api';
import {
  GET_USERS_REQUEST,
  GET_BOOKMARKS_REQUEST,
  Bookmark,
  User,
  Meta,
  RequestGetBookmarksAction,
  RequestGetUsersAction,
} from 'app/admin/types';

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

export function* handleRequestGetUsers(action: RequestGetUsersAction) {
  try {
    const { offset, limit } = action.payload;
    yield put(doShowLoading());
    const { meta, data }: { meta: Meta; data: User[] } = yield call(requestGetUsers, offset, limit);
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
