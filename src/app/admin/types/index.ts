export const GET_BOOKMARKS_REQUEST = 'GET_BOOKMARKS_REQUEST';
export const GET_BOOKMARKS_SUCCESS = 'GET_BOOKMARKS_SUCCESS';
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const BOOKMARKS_META_CHANGE = 'BOOKMARKS_META_CHANGE';
export const USERS_META_CHANGE = 'USERS_META_CHANGE';

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password_digest: string;
  is_admin: boolean;
  created_at: string;
  updated_at: string;
  bookmarks_count: number;
}

export interface Meta {
  count: number;
  limit: number;
  offset: number;
  total: number;
}

export interface AdminState {
  bookmarks: {
    meta: Meta;
    data: Bookmark[];
  };
  users: {
    meta: Meta;
    data: User[];
  };
}

export interface AdminSelector {
  admin: AdminState;
}

export interface RequestGetBookmarksAction {
  type: typeof GET_BOOKMARKS_REQUEST;
  payload: {
    offset: number;
    limit: number;
  };
}

interface SuccessGetBookmarksAction {
  type: typeof GET_BOOKMARKS_SUCCESS;
  payload: {
    meta: Meta;
    data: Bookmark[];
  };
}

export interface RequestGetUsersAction {
  type: typeof GET_USERS_REQUEST;
  payload: {
    offset: number;
    limit: number;
  };
}

interface SuccessGetUsersAction {
  type: typeof GET_USERS_SUCCESS;
  payload: {
    meta: Meta;
    data: User[];
  };
}

interface ChangeBookmarksMetaAction {
  type: typeof BOOKMARKS_META_CHANGE;
  payload: {
    count: number;
    offset: number;
    limit: number;
    total: number;
  };
}

interface ChangeUsersMetaAction {
  type: typeof USERS_META_CHANGE;
  payload: {
    count: number;
    offset: number;
    limit: number;
    total: number;
  };
}

export type AdminActionTypes =
  | RequestGetBookmarksAction
  | SuccessGetBookmarksAction
  | RequestGetUsersAction
  | SuccessGetUsersAction
  | ChangeBookmarksMetaAction
  | ChangeUsersMetaAction;
