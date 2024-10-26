import axios from "axios"

export const gatCreator = async (creatorId) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_CREATORS_API}${creatorId}`)
        return response.data
    } catch (error) {
        throw error
    }
}