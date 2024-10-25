import { useState, useEffect } from 'react';
import { gatAllCreators } from '../../apis/creator/gatAllCreators';

const useGetAllCreators = () => {
    const [creatorsData, setCreatorsData] = useState(null);
    const [loadingCreatorsData, setLoadingCreatorsData] = useState(true);
    const [errorCreatorsData, setErrorCreatorsData] = useState(null);

    useEffect(() => {
        const fetchAPIData = async () => {
            try {
                const result = await gatAllCreators();
                setCreatorsData(result);
            } catch (error) {
                setErrorCreatorsData(error);
            } finally {
                setLoadingCreatorsData(false);
            }
        };

        fetchAPIData();
    }, []);

    return { creatorsData, loadingCreatorsData, errorCreatorsData };
};

export default useGetAllCreators;