import { useState, useEffect } from 'react';
import { gatCreator } from '../../apis/creator/getCreator';

const useGetCreator = (creatorId) => {
    const [creatorData, setCreatorData] = useState(null);
    const [loadingCreatorData, setLoadingCreatorData] = useState(true);
    const [errorCreatorData, setErrorCreatorData] = useState(null);

    useEffect(() => {
        const fetchAPIData = async () => {
            try {
                const result = await gatCreator(creatorId);
                setCreatorData(result);
            } catch (error) {
                setErrorCreatorData(error);
            } finally {
                setLoadingCreatorData(false);
            }
        };

        fetchAPIData();
    }, [creatorId]);

    return { creatorData, setCreatorData, loadingCreatorData, errorCreatorData };
};

export default useGetCreator;