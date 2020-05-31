import { BookmarkData } from '../types';
import ApiClient from '../../../client';

const client = new ApiClient();

export const requestGetMyBookmarks = async (offset: number, limit: number) => {
  const response = await client.get(`/v1/bookmarks?offset=${offset}&limit=${limit}`);
  return response.data;
};

export const requestCreateBookmark = async (payload: BookmarkData) => {
  const response = await client.post('/v1/bookmarks', payload);
  return response.data;
};

export const requestUpdateBookmark = async (bookmarkId: string, payload: BookmarkData) => {
  const response = await client.put(`/v1/bookmarks/${bookmarkId}`, payload);
  return response.data;
};

export const requestDeleteBookmark = async (bookmarkId: string) => {
  const response = await client.delete(`/v1/bookmarks/${bookmarkId}`);
  return response.data;
};
