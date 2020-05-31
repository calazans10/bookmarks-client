import ApiClient from 'client';

const client = new ApiClient();

export const requestLogin = async (payload: {
  auth: {
    email: string;
    password: string;
  };
}) => {
  const response = await client.post('/v1/session', payload);
  return response.data;
};

export const requestRegistration = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await client.post('/v1/registration', payload);
  return response.data;
};

export const requestGetCurrentUser = async () => {
  const response = await client.get('/v1/me');
  return response.data;
};
