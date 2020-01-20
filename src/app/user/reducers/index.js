import { createReducer } from '@reduxjs/toolkit';
import {
  GET_MY_BOOKMARKS_SUCCESS,
  DELETE_BOOKMARK_SUCCESS,
  SELECTED_BOOKMARK_CHANGE,
} from '../constants/actionTypes';

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
  selectedBookmark: {},
};

const applySuccessGetMyBookmarks = (state, action) => {
  const { meta, data } = action.payload;
  const updatedBookmarks = { ...state.bookmarks, meta, data };
  return { ...state, bookmarks: updatedBookmarks };
};

const applySuccessDeleteBookmark = (state, action) => {
  const { bookmarkId } = action.payload;
  const { data } = state.bookmarks;
  const filteredData = data.filter(bookmark => bookmark.id !== bookmarkId);
  const updatedBookmarks = { ...state.bookmarks, data: filteredData };
  return { ...state, bookmarks: updatedBookmarks };
};

const applyChangeSelectedBookmark = (state, action) => {
  const { bookmark } = action.payload;
  return { ...state, selectedBookmark: bookmark };
};

const userReducer = createReducer(INITIAL_STATE, {
  [GET_MY_BOOKMARKS_SUCCESS]: (state, action) => applySuccessGetMyBookmarks(state, action),
  [DELETE_BOOKMARK_SUCCESS]: (state, action) => applySuccessDeleteBookmark(state, action),
  [SELECTED_BOOKMARK_CHANGE]: (state, action) => applyChangeSelectedBookmark(state, action),
});

export default userReducer;
