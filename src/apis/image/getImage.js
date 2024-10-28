import axios from "axios";

export const getImage = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_IMAGES_API}${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
