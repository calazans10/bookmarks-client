import {
  Bookmark,
  User,
  Meta,
  GET_BOOKMARKS_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  BOOKMARKS_META_CHANGE,
  USERS_META_CHANGE,
  AdminActionTypes,
} from 'app/admin/types';

export const doRequestGetBookmarks = (offset: number, limit: number): AdminActionTypes => ({
  type: GET_BOOKMARKS_REQUEST,
  payload: {
    offset,
    limit,
  },
});

export const doSuccessGetBookmarks = (meta: Meta, data: Bookmark[]): AdminActionTypes => ({
  type: GET_BOOKMARKS_SUCCESS,
  payload: {
    meta,
    data,
  },
});

export const doRequestGetUsers = (offset: number, limit: number): AdminActionTypes => ({
  type: GET_USERS_REQUEST,
  payload: {
    offset,
    limit,
  },
});

export const doSuccessGetUsers = (meta: Meta, data: User[]): AdminActionTypes => ({
  type: GET_USERS_SUCCESS,
  payload: {
    meta,
    data,
  },
});

export const doChangeBookmarksMeta = (
  count: number,
  offset: number,
  limit: number,
  total: number
): AdminActionTypes => ({
  type: BOOKMARKS_META_CHANGE,
  payload: {
    count,
    offset,
    limit,
    total,
  },
});

export const doChangeUsersMeta = (
  count: number,
  offset: number,
  limit: number,
  total: number
): AdminActionTypes => ({
  type: USERS_META_CHANGE,
  payload: {
    count,
    offset,
    limit,
    total,
  },
});
