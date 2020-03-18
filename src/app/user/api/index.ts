import AxiosMock from './index.mock';
import { BookmarkData } from '../types';
import axiosFactory from '../../../utils/axios';

const axios = axiosFactory.createInstance(process.env.REACT_APP_API_URL);

if (process.env.REACT_APP_API_MOCK === 'on') {
  const mock = new AxiosMock(axios);
  mock.registerUrls();
}

export const requestGetMyBookmarks = async (offset: number, limit: number) => {
  const response = await axios.get(`/v1/bookmarks?offset=${offset}&limit=${limit}`);
  return response.data;
};

export const requestCreateBookmark = async (payload: BookmarkData) => {
  const response = await axios.post('/v1/bookmarks', payload);
  return response.data;
};

export const requestUpdateBookmark = async (bookmarkId: string, payload: BookmarkData) => {
  const response = await axios.put(`/v1/bookmarks/${bookmarkId}`, payload);
  return response.data;
};

export const requestDeleteBookmark = async (bookmarkId: string) => {
  const response = await axios.delete(`/v1/bookmarks/${bookmarkId}`);
  return response.data;
};
