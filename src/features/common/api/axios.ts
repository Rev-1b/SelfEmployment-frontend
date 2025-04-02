import axios from 'axios';
import { tokenService } from '../services/tokenService.ts';
import { RefreshTokenResponse } from '../../start/pages/AuthPage/types.ts';

const BASE_URL = 'http://localhost:8000/api/v1';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

axiosInstance.interceptors.request.use(
    (config) => {
        const token = tokenService.getAccessToken();
        if (token) {
            config.headers.Authorization = `JWT ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then(token => {
                        originalRequest.headers.Authorization = `JWT ${token}`;
                        return axiosInstance(originalRequest);
                    })
                    .catch(err => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const refreshToken = tokenService.getRefreshToken();
                if (!refreshToken) {
                    throw new Error('No refresh token');
                }

                const response = await axios.post<RefreshTokenResponse>(
                    `${BASE_URL}/users/auth/jwt/refresh/`,
                    { refresh: refreshToken }
                );

                const { access } = response.data;
                tokenService.setAccessToken(access);

                processQueue(null, access);

                originalRequest.headers.Authorization = `JWT ${access}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);
                tokenService.removeTokens();
                window.location.href = '/auth';
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
); 