import AxiosMock from './index.mock';
import axiosFactory from '../../../lib/axios';

const axios = axiosFactory.createInstance(process.env.REACT_APP_API_URL);

if (process.env.REACT_APP_API_MOCK === 'on') {
  const mock = new AxiosMock(axios);
  mock.registerUrls();
}

export const requestLogin = payload => {
  return axios.post('/v1/session', payload).then(response => response.data);
};

export const requestRegistration = payload => {
  return axios.post('/v1/registration', payload).then(response => response.data);
};

export const requestGetCurrentUser = () => {
  return axios.get('/v1/me').then(response => response.data);
};
