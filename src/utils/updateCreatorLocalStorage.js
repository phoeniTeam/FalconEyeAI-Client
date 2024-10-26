const USER_LOCAL_STORAGE = import.meta.env.VITE_USER_LOCAL_STORAGE

export const updateCreatorLocalStorage = (updatedData) => {
    try {
        const existingUserData = JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE));

        const newUserData = {
            ...existingUserData,
            ...updatedData
        };

        localStorage.setItem(USER_LOCAL_STORAGE, JSON.stringify(newUserData));

        return newUserData;
    } catch (error) {
        console.error('Error updating user data:', error);
        throw error;
    }
};