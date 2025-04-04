import { axiosInstance } from '../../../../common/api/axios.ts';
import { RegisterData, UserResponse } from '../types.ts';

export const registerAPI = {
    register: (data: RegisterData) => {
        return axiosInstance.post<UserResponse>('/users/register/', data);
    },
}; 