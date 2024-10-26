const USER_LOCAL_STORAGE = import.meta.env.VITE_USER_LOCAL_STORAGE

export const getCreatorLocalStorage = () => {
    try {
        const userData = JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE));

        return userData;
    } catch (error) {
        console.error('Error getting user data:', error);
        throw error;
    }
};