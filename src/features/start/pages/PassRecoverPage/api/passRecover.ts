import { axiosInstance } from '../../../../common/api/axios.ts';
import { PassRecoverData, PassRecoverResponse } from '../types';

export const passRecoverAPI = {
    recoverPassword: (data: PassRecoverData) => {
        return axiosInstance.post<PassRecoverResponse>('/users/recover-password/', data);
    },
}; 