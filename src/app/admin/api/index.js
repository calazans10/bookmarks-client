import AxiosMock from './index.mock';
import axiosFactory from '../../../lib/axios';

const axios = axiosFactory.createInstance(process.env.REACT_APP_API_URL);

if (process.env.REACT_APP_API_MOCK === 'on') {
  const mock = new AxiosMock(axios);
  mock.registerUrls();
}

export const requestGetBookmarks = (offset, limit) => {
  return axios
    .get(`/v1/admin/bookmarks?offset=${offset}&limit=${limit}`)
    .then(response => response.data);
};

export const requestGetUsers = (offset, limit) => {
  return axios
    .get(`/v1/admin/users?offset=${offset}&limit=${limit}`)
    .then(response => response.data);
};
