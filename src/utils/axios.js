import axios from 'axios';

const enhanceError = error => {
  const defaultMessage = 'The operation could not be completed. Please try again later.';
  const enhancedError = error || {};

  if (!enhancedError.response) {
    enhancedError.response = {};
    enhancedError.response.message = defaultMessage;
  }

  const { status } = enhancedError.response;
  if (!status) {
    enhancedError.response.status = 0;
  }

  return enhancedError;
};

class AxiosFactory {
  createInstance(url) {
    const source = axios.CancelToken.source();
    this.instance = axios.create({
      baseURL: url,
      timeout: process.env.REACT_APP_TIMEOUT,
      cancelToken: source.token,
    });

    this.instance.interceptors.request.use(
      config => {
        const token = sessionStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        setTimeout(() => {
          source.cancel();
        }, process.env.REACT_APP_TIMEOUT + 1000);

        return config;
      },
      error => {
        const enhancedError = enhanceError(error);
        Promise.reject(enhancedError);
      }
    );

    this.instance.interceptors.response.use(
      config => config,
      error => {
        const enhancedError = enhanceError(error);
        return Promise.reject(enhancedError);
      }
    );

    return this.instance;
  }
}

export default new AxiosFactory();
