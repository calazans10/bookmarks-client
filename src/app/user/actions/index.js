import {
  GET_MY_BOOKMARKS_REQUEST,
  GET_MY_BOOKMARKS_SUCCESS,
  CREATE_BOOKMARK_REQUEST,
  UPDATE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_SUCCESS,
  SELECTED_BOOKMARK_CHANGE,
} from '../constants/actionTypes';

export const doRequestGetMyBookmarks = (offset, limit) => ({
  type: GET_MY_BOOKMARKS_REQUEST,
  payload: {
    offset,
    limit,
  },
});

export const doSuccessGetMyBookmarks = (meta, data) => ({
  type: GET_MY_BOOKMARKS_SUCCESS,
  payload: {
    meta,
    data,
  },
});

export const doRequestCreateBookmark = data => ({
  type: CREATE_BOOKMARK_REQUEST,
  payload: {
    data,
  },
});

export const doRequestUpdateBookmark = (bookmarkId, data) => ({
  type: UPDATE_BOOKMARK_REQUEST,
  payload: {
    bookmarkId,
    data,
  },
});

export const doRequestDeleteBookmark = bookmarkId => ({
  type: DELETE_BOOKMARK_REQUEST,
  payload: {
    bookmarkId,
  },
});

export const doSuccessDeleteBookmark = bookmarkId => ({
  type: DELETE_BOOKMARK_SUCCESS,
  payload: {
    bookmarkId,
  },
});

export const doChangeSelectedBookmark = bookmark => ({
  type: SELECTED_BOOKMARK_CHANGE,
  payload: {
    bookmark,
  },
});
