import axios from 'axios';

import { requestInterceptor, requestInterceptorError, responseInterceptor, responseInterceptorError } from './axiosInterceptor';

const Axios = axios.create()

Axios.interceptors.request.use(requestInterceptor, requestInterceptorError);
Axios.interceptors.response.use(responseInterceptor, responseInterceptorError);

const axiosFetcher = (url: string) => Axios.get(url).then(res => res.data)

export { Axios, axiosFetcher };

