import axiosInstance from "../Helpers/AxiosInstance.js";

export async function fetchCoinDetails(id) {
    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        return response.data;

    } catch(error) {
        console.error(error);
        return null;
    }
}