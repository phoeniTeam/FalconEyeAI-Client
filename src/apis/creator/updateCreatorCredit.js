import axios from "axios"

export const updateCreatorCredit = async (creatorId, authToken, newBalance) => {
    try {
        const response = await axios.patch(`${import.meta.env.VITE_CREATORS_API}${creatorId}`, { creditBalance: newBalance }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`,
            },
        });
        return response.data
    } catch (error) {
        console.error("Error updating creator credit:", error)
        throw error
    }
}