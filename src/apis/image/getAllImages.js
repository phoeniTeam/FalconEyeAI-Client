import axios from "axios"

export const gatAllImages = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_IMAGES_API)
        return response.data
    } catch (error) {
        throw error
    }
}