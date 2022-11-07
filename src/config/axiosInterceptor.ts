import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
// import Alert from 'components/main/Alert';

function requestInterceptor(config: AxiosRequestConfig) {
  // console.info("Request Interceptor");
  // console.log(config);
  return config;
}

function requestInterceptorError(error: AxiosError) {
  // Alert.fire({ icon: 'error', text: 'Request Error!' })
  return Promise.reject(error);
}

function responseInterceptor(response: AxiosResponse) {
  // console.info('Response Interceptor')
  // console.log(response)
  return response;
}

function responseInterceptorError(error: AxiosError) {
  // Alert.fire({ icon: "error", text: "Response Error!" });
  // Alert an Error
  return Promise.reject(error);
}

export {
  requestInterceptor,
  requestInterceptorError,
  responseInterceptor,
  responseInterceptorError,
};
