import { axiosInstance } from '../../../../common/api/axios.ts';
import { RequisiteData, RequisitesResponse } from '../types.ts';

export const requisitesAPI = {
    create: (data: RequisiteData) => {
        return axiosInstance.post<RequisitesResponse>('/users/requisites/', data);
    },

    getAll: () => {
        return axiosInstance.get<{ results: RequisitesResponse[] }>('/users/requisites/');
    },

    update: (id: string, data: RequisiteData) => {
        return axiosInstance.put<RequisitesResponse>(`/users/requisites/${id}/`, data);
    },

    delete: (id: string) => {
        return axiosInstance.delete(`/users/requisites/${id}/`);
    }
}; 