import { axiosInstance } from '../../../../common/api/axios.ts';
import { RegisterData, UserResponse } from '../types';

export const registerAPI = {
    register: (data: RegisterData) => {
        return axiosInstance.post<UserResponse>('/users/register/', data);
    },
}; 