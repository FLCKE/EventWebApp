
import axiosInstance from '../config/Api';
export async function getAllEventByUser(data) {
    const response = await axiosInstance.post('/auth/login', data);
    return response.data;
}