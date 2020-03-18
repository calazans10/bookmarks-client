import {
  Bookmark,
  Meta,
  BookmarkData,
  GET_MY_BOOKMARKS_REQUEST,
  GET_MY_BOOKMARKS_SUCCESS,
  CREATE_BOOKMARK_REQUEST,
  UPDATE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_SUCCESS,
  SELECTED_BOOKMARK_CHANGE,
  MY_BOOKMARKS_META_CHANGE,
  UserActionTypes,
} from '../types';

export const doRequestGetMyBookmarks = (offset: number, limit: number): UserActionTypes => ({
  type: GET_MY_BOOKMARKS_REQUEST,
  payload: {
    offset,
    limit,
  },
});

export const doSuccessGetMyBookmarks = (meta: Meta, data: Bookmark[]): UserActionTypes => ({
  type: GET_MY_BOOKMARKS_SUCCESS,
  payload: {
    meta,
    data,
  },
});

export const doRequestCreateBookmark = (data: BookmarkData): UserActionTypes => ({
  type: CREATE_BOOKMARK_REQUEST,
  payload: {
    data,
  },
});

export const doRequestUpdateBookmark = (
  bookmarkId: string,
  data: BookmarkData
): UserActionTypes => ({
  type: UPDATE_BOOKMARK_REQUEST,
  payload: {
    bookmarkId,
    data,
  },
});

export const doRequestDeleteBookmark = (bookmarkId: string): UserActionTypes => ({
  type: DELETE_BOOKMARK_REQUEST,
  payload: {
    bookmarkId,
  },
});

export const doSuccessDeleteBookmark = (bookmarkId: string): UserActionTypes => ({
  type: DELETE_BOOKMARK_SUCCESS,
  payload: {
    bookmarkId,
  },
});

export const doChangeSelectedBookmark = (bookmark: Bookmark): UserActionTypes => ({
  type: SELECTED_BOOKMARK_CHANGE,
  payload: {
    bookmark,
  },
});

export const doChangeMyBookmarksMeta = (
  count: number,
  offset: number,
  limit: number,
  total: number
): UserActionTypes => ({
  type: MY_BOOKMARKS_META_CHANGE,
  payload: {
    count,
    offset,
    limit,
    total,
  },
});
