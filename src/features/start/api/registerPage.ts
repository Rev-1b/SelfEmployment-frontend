import { axiosInstance } from '../../common/api/axios';

export interface IRegisterFormData {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}

export interface IRegisterData {
    email: string;
    username: string;
    password: string;
}

export const registerAPI = {
    register: async (data: IRegisterData) => {
        return axiosInstance.post('/users/register/', data);
    },
};