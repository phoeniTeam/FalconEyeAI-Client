import axios from "axios";

export const gatAllImages = async () => {
    const allImages = [];
    let currentPage = 1;
    let totalPages = 1; 

    try {
        const initialResponse = await axios.get(`${import.meta.env.VITE_IMAGES_API}?page=${currentPage}`);
        allImages.push(...initialResponse.data.images);
        totalPages = initialResponse.data.totalPages; 

        while (currentPage < totalPages) {
            currentPage++;
            const response = await axios.get(`${import.meta.env.VITE_IMAGES_API}?page=${currentPage}`);
            allImages.push(...response.data.images);
        }

        return {
            images: allImages,
            totalImages: allImages.length,
        };
    } catch (error) {
        throw error;
    }
};
