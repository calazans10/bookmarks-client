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

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MY_BOOKMARKS_SUCCESS:
      return applySuccessGetMyBookmarks(state, action);
    case DELETE_BOOKMARK_SUCCESS:
      return applySuccessDeleteBookmark(state, action);
    case SELECTED_BOOKMARK_CHANGE:
      return applyChangeSelectedBookmark(state, action);
    default:
      return state;
  }
};

export default userReducer;
