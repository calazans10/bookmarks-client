import AxiosMock from './index.mock';
import axiosFactory from '../../../utils/axios';

const axios = axiosFactory.createInstance(process.env.REACT_APP_API_URL);

if (process.env.REACT_APP_API_MOCK === 'on') {
  const mock = new AxiosMock(axios);
  mock.registerUrls();
}

export const requestGetBookmarks = async (offset: number, limit: number) => {
  const response = await axios.get(`/v1/admin/bookmarks?offset=${offset}&limit=${limit}`);
  return response.data;
};

export const requestGetUsers = async (offset: number, limit: number) => {
  const response = await axios.get(`/v1/admin/users?offset=${offset}&limit=${limit}`);
  return response.data;
};
