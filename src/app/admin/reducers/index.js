import { createReducer } from '@reduxjs/toolkit';
import { GET_BOOKMARKS_SUCCESS, GET_USERS_SUCCESS } from '../constants/actionTypes';

const INITIAL_STATE = {
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

const adminReducer = createReducer(INITIAL_STATE, {
  [GET_BOOKMARKS_SUCCESS]: (state, action) => applySuccessGetBookmarks(state, action),
  [GET_USERS_SUCCESS]: (state, action) => applySuccessGetUsers(state, action),
});

export default adminReducer;
