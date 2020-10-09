import axios from 'axios';

const setupAxiosInterceptors = onUnauthenticated => {
    const onRequestSuccess = config => {
        let token = localStorage.getItem('authtoken');
        if (token) {
            config.headers['x-authtoken'] = token;
        }
        config.timeout = 10000;
        return config;
    };
    const onResponseSuccess = (response) => response;
    const onResponseError = error => {
        if (error.response.status === 403) {
            localStorage.removeItem('authtoken');
            onUnauthenticated();
        }
        return Promise.reject(error);
    };
    axios.interceptors.request.use(onRequestSuccess);
    axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
