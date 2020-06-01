import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  Bookmark,
  Meta,
  UserState,
  GET_BOOKMARKS_SUCCESS,
  DELETE_BOOKMARK_SUCCESS,
  SELECTED_BOOKMARK_CHANGE,
  BOOKMARKS_META_CHANGE,
} from 'app/user/types';

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

const applySuccessGetBookmarks = (state, action) => {
  const { meta, data } = action.payload;
  state.bookmarks.meta = meta;
  state.bookmarks.data = data;
};

const applySuccessDeleteBookmark = (state, action) => {
  const { bookmarkId } = action.payload;
  state.bookmarks.data = state.bookmarks.data.filter(bookmark => bookmark.id !== bookmarkId);
  state.bookmarks.meta.count--;
  state.bookmarks.meta.total--;
};

const applyChangeSelectedBookmark = (state, action) => {
  const { bookmark } = action.payload;
  state.selectedBookmark = bookmark;
};

const applyChangeBookmarksMeta = (state, action) => {
  state.bookmarks.meta = action.payload;
};

const userReducer = createReducer(initialState, {
  [GET_BOOKMARKS_SUCCESS]: (state, action: PayloadAction<{ meta: Meta; data: Bookmark[] }>) =>
    applySuccessGetBookmarks(state, action),
  [DELETE_BOOKMARK_SUCCESS]: (state, action: PayloadAction<{ bookmarkId: string }>) =>
    applySuccessDeleteBookmark(state, action),
  [SELECTED_BOOKMARK_CHANGE]: (state, action: PayloadAction<{ bookmark: Bookmark }>) =>
    applyChangeSelectedBookmark(state, action),
  [BOOKMARKS_META_CHANGE]: (state, action: PayloadAction<Meta>) =>
    applyChangeBookmarksMeta(state, action),
});

export default userReducer;
