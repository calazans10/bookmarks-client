import axios, { AxiosInstance } from 'axios';
import env from 'env-var';

const API_URL: string = env.get('REACT_APP_API_URL').required().asString();
const APP_TIMEOUT: number = env.get('REACT_APP_TIMEOUT').required().asIntPositive();

const getClient = (): AxiosInstance => {
  const options = {
    baseURL: `${API_URL}/api`,
    timeout: APP_TIMEOUT,
  };

  const client = axios.create(options);

  // Add a request interceptor
  client.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }, error => {
    return Promise.reject(error);
  });

  // Add a response interceptor
  client.interceptors.response.use(
    response => response,
    error => {
      return Promise.reject(error);
    }
  );

  return client;
}

class ApiClient {
  client: AxiosInstance;

  constructor() {
    this.client = getClient();
  }

  async get(url: string, conf = {}) {
    try {
      const response = await this.client.get(url, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async delete(url: string, conf = {}) {
    try {
      const response = await this.client.delete(url, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async head(url: string, conf = {}) {
    try {
      const response = await this.client.head(url, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async options(url: string, conf = {}) {
    try {
      const response = await this.client.options(url, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async post(url: string, data = {}, conf = {}) {
    try {
      const response = await this.client.post(url, data, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async put(url: string, data = {}, conf = {}) {
    try {
      const response = await this.client.put(url, data, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async patch(url: string, data = {}, conf = {}) {
    try {
      const response = await this.client.patch(url, data, conf);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default ApiClient;
