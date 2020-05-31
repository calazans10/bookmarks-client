import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  Bookmark,
  User,
  Meta,
  AdminState,
  GET_BOOKMARKS_SUCCESS,
  GET_USERS_SUCCESS,
  BOOKMARKS_META_CHANGE,
  USERS_META_CHANGE,
} from '../types';

const initialState: AdminState = {
  bookmarks: {
    meta: {
      count: 0,
      offset: 1,
      limit: 10,
      total: 0,
    },
    data: [],
  },
  users: {
    meta: {
      count: 0,
      offset: 1,
      limit: 10,
      total: 0,
    },
    data: [],
  },
};

const applySuccessGetBookmarks = (state, action) => {
  const { meta, data } = action.payload;
  state.bookmarks.meta = meta;
  state.bookmarks.data = data;
};

const applySuccessGetUsers = (state, action) => {
  const { meta, data } = action.payload;
  state.users.meta = meta;
  state.users.data = data;
};

const applyChangeBookmarksMeta = (state, action) => {
  state.bookmarks.meta = action.payload;
};

const applyChangeUsersMeta = (state, action) => {
  state.users.meta = action.payload;
};

const adminReducer = createReducer(initialState, {
  [GET_BOOKMARKS_SUCCESS]: (state, action: PayloadAction<{ meta: Meta; data: Bookmark[] }>) =>
    applySuccessGetBookmarks(state, action),
  [GET_USERS_SUCCESS]: (state, action: PayloadAction<{ meta: Meta; data: User[] }>) =>
    applySuccessGetUsers(state, action),
  [BOOKMARKS_META_CHANGE]: (state, action: PayloadAction<Meta>) =>
    applyChangeBookmarksMeta(state, action),
  [USERS_META_CHANGE]: (state, action: PayloadAction<Meta>) => applyChangeUsersMeta(state, action),
});

export default adminReducer;
