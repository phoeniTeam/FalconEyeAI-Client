import axios from "axios"

export const gatAllCreators = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_CREATORS_API)
        return response.data
    } catch (error) {
        throw error
    }
}