import {
  GET_BOOKMARKS_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from '../constants/actionTypes';

export const doRequestGetBookmarks = (offset, limit) => ({
  type: GET_BOOKMARKS_REQUEST,
  payload: {
    offset,
    limit,
  },
});

export const doSuccessGetBookmarks = (meta, data) => ({
  type: GET_BOOKMARKS_SUCCESS,
  payload: {
    meta,
    data,
  },
});

export const doRequestGetUsers = (offset, limit) => ({
  type: GET_USERS_REQUEST,
  payload: {
    offset,
    limit,
  },
});

export const doSuccessGetUsers = (meta, data) => ({
  type: GET_USERS_SUCCESS,
  payload: {
    meta,
    data,
  },
});
