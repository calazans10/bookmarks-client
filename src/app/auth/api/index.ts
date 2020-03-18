import AxiosMock from './index.mock';
import axiosFactory from '../../../utils/axios';

const axios = axiosFactory.createInstance(process.env.REACT_APP_API_URL);

if (process.env.REACT_APP_API_MOCK === 'on') {
  const mock = new AxiosMock(axios);
  mock.registerUrls();
}

export const requestLogin = async (payload: {
  auth: {
    email: string;
    password: string;
  };
}) => {
  const response = await axios.post('/v1/session', payload);
  return response.data;
};

export const requestRegistration = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post('/v1/registration', payload);
  return response.data;
};

export const requestGetCurrentUser = async () => {
  const response = await axios.get('/v1/me');
  return response.data;
};
