import { createAction } from '@reduxjs/toolkit';
import {
  GET_BOOKMARKS_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from '../constants/actionTypes';

export const doRequestGetBookmarks = createAction(GET_BOOKMARKS_REQUEST, (offset, limit) => ({
  payload: {
    offset,
    limit,
  },
}));

export const doSuccessGetBookmarks = createAction(GET_BOOKMARKS_SUCCESS, (meta, data) => ({
  payload: {
    meta,
    data,
  },
}));

export const doRequestGetUsers = createAction(GET_USERS_REQUEST, (offset, limit) => ({
  payload: {
    offset,
    limit,
  },
}));

export const doSuccessGetUsers = createAction(GET_USERS_SUCCESS, (meta, data) => ({
  payload: {
    meta,
    data,
  },
}));
