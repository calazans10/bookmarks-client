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
  const updatedBookmarks = { ...state.bookmarks, meta, data };
  return { ...state, bookmarks: updatedBookmarks };
};

const applySuccessGetUsers = (state, action) => {
  const { meta, data } = action.payload;
  const updatedUsers = { ...state.users, meta, data };
  return { ...state, users: updatedUsers };
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BOOKMARKS_SUCCESS:
      return applySuccessGetBookmarks(state, action);
    case GET_USERS_SUCCESS:
      return applySuccessGetUsers(state, action);
    default:
      return state;
  }
};

export default adminReducer;
