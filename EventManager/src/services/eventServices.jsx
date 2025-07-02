import axiosInstance from "../config/Api";
export async function getAllEventByOrganizer(id, page, limit) {
  const response = await axiosInstance.get(
    `/event/organizer/${id}?page=${page}&limit=${limit}`
  );
  return response.data;
}
export async function getEventById(id) {
  const response = await axiosInstance.get(`/event/${id}`);
  return response.data;
}
export async function createEvent(data) {
  const response = await axiosInstance.post(`/event/`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
  return response.data;
}
export async function updateEvent(id, data) {
  const response = await axiosInstance.put(`/event/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
  return response.data;
}
