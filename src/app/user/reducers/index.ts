import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  Bookmark,
  Meta,
  UserState,
  GET_MY_BOOKMARKS_SUCCESS,
  DELETE_BOOKMARK_SUCCESS,
  SELECTED_BOOKMARK_CHANGE,
  MY_BOOKMARKS_META_CHANGE,
} from '../types';

const initialState: UserState = {
  bookmarks: {
    meta: {
      count: 0,
      offset: 1,
      limit: 10,
      total: 0,
    },
    data: [],
  },
  selectedBookmark: {} as Bookmark,
};

const applySuccessGetMyBookmarks = (state, action) => {
  const { meta, data } = action.payload;
  state.bookmarks.meta = meta;
  state.bookmarks.data = data;
};

const applySuccessDeleteBookmark = (state, action) => {
  const { bookmarkId } = action.payload;
  state.bookmarks.data = state.bookmarks.data.filter(bookmark => bookmark.id !== bookmarkId);
};

const applyChangeSelectedBookmark = (state, action) => {
  const { bookmark } = action.payload;
  state.selectedBookmark = bookmark;
};

const applyChangeMyBookmarksMeta = (state, action) => {
  state.bookmarks.meta = action.payload;
};

const userReducer = createReducer(initialState, {
  [GET_MY_BOOKMARKS_SUCCESS]: (state, action: PayloadAction<{ meta: Meta; data: Bookmark[] }>) =>
    applySuccessGetMyBookmarks(state, action),
  [DELETE_BOOKMARK_SUCCESS]: (state, action: PayloadAction<{ bookmarkId: string }>) =>
    applySuccessDeleteBookmark(state, action),
  [SELECTED_BOOKMARK_CHANGE]: (state, action: PayloadAction<{ bookmark: Bookmark }>) =>
    applyChangeSelectedBookmark(state, action),
  [MY_BOOKMARKS_META_CHANGE]: (state, action: PayloadAction<Meta>) =>
    applyChangeMyBookmarksMeta(state, action),
});

export default userReducer;
