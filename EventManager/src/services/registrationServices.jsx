import axiosInstance from '../config/Api';
export async function getAllRegisterByOrganizer(id, page , limit) {
    const response = await axiosInstance.get(`/registration/register/${id}?page=${page}&${limit}`);
    return response.data;
}