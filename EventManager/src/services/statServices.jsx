import axiosInstance from '../config/Api';
export async function getAllStat(id) {
    const response = await axiosInstance.get(`/stat/${id}`);
    return response.data;
}