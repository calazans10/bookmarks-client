import { createAction } from '@reduxjs/toolkit';
import {
  GET_MY_BOOKMARKS_REQUEST,
  GET_MY_BOOKMARKS_SUCCESS,
  CREATE_BOOKMARK_REQUEST,
  UPDATE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_SUCCESS,
  SELECTED_BOOKMARK_CHANGE,
} from '../constants/actionTypes';

export const doRequestGetMyBookmarks = createAction(GET_MY_BOOKMARKS_REQUEST, (offset, limit) => ({
  payload: {
    offset,
    limit,
  },
}));

export const doSuccessGetMyBookmarks = createAction(GET_MY_BOOKMARKS_SUCCESS, (meta, data) => ({
  payload: {
    meta,
    data,
  },
}));

export const doRequestCreateBookmark = createAction(CREATE_BOOKMARK_REQUEST, data => ({
  payload: {
    data,
  },
}));

export const doRequestUpdateBookmark = createAction(
  UPDATE_BOOKMARK_REQUEST,
  (bookmarkId, data) => ({
    payload: {
      bookmarkId,
      data,
    },
  })
);

export const doRequestDeleteBookmark = createAction(DELETE_BOOKMARK_REQUEST, bookmarkId => ({
  payload: {
    bookmarkId,
  },
}));

export const doSuccessDeleteBookmark = createAction(DELETE_BOOKMARK_SUCCESS, bookmarkId => ({
  payload: {
    bookmarkId,
  },
}));

export const doChangeSelectedBookmark = createAction(SELECTED_BOOKMARK_CHANGE, bookmark => ({
  payload: {
    bookmark,
  },
}));
