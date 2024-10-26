import axios from "axios";

export const createImage = async (image, authToken) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_IMAGES_API}`, image, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};