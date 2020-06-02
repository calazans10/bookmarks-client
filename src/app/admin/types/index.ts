export const GET_BOOKMARKS_REQUEST = 'admin/GET_BOOKMARKS_REQUEST';
export const GET_BOOKMARKS_SUCCESS = 'admin/GET_BOOKMARKS_SUCCESS';
export const GET_USERS_REQUEST = 'admin/GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'admin/GET_USERS_SUCCESS';
export const BOOKMARKS_META_CHANGE = 'admin/BOOKMARKS_META_CHANGE';
export const USERS_META_CHANGE = 'admin/USERS_META_CHANGE';

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
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
