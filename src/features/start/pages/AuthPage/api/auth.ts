import { axiosInstance } from '../../../../common/api/axios.ts';
import { AuthData, TokenResponse } from '../types';

export const authAPI = {
    login: (data: AuthData) => {
        return axiosInstance.post<TokenResponse>('/users/auth/jwt/create/', data);
    },

    // logout: () => {
    //     return axiosInstance.post('/api/logout/');
    // },
}; 