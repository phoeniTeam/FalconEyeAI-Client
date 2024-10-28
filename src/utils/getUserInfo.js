
export const getUserInfo = () => {
    const USER_LOCAL_STORAGE = import.meta.env.VITE_USER_LOCAL_STORAGE;

    try {
        const creatorData = JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE)) || {};
        // console.log('Creator Data:', creatorData); 

        const loggedInUserId = creatorData?.creator?._id; 

        return {
            creditBalance: creatorData?.creator?.creditBalance || 0, 
            name: creatorData?.creator?.name || '', 
            username: creatorData?.creator?.username || '',
            id: loggedInUserId 
        };
    } catch (error) {
        console.error('Error getting user data:', error);
        throw error;
    }
};
