import AxiosMock from './index.mock';
import axiosFactory from '../../../lib/axios';

const axios = axiosFactory.createInstance(process.env.REACT_APP_API_URL);

if (process.env.REACT_APP_API_MOCK === 'on') {
  const mock = new AxiosMock(axios);
  mock.registerUrls();
}

export const requestGetMyBookmarks = (offset, limit) => {
  return axios.get(`/v1/bookmarks?offset=${offset}&limit=${limit}`).then(response => response.data);
};

export const requestCreateBookmark = payload => {
  return axios.post('/v1/bookmarks', payload).then(response => response.data);
};

export const requestUpdateBookmark = (bookmarkId, payload) => {
  return axios.put(`/v1/bookmarks/${bookmarkId}`, payload).then(response => response.data);
};

export const requestDeleteBookmark = bookmarkId => {
  return axios.delete(`/v1/bookmarks/${bookmarkId}`).then(response => response.data);
};
