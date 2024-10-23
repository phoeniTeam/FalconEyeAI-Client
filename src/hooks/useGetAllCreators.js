import { useState, useEffect } from 'react';
import { gatAllCreators } from '../apis/gatAllCreators';

const useGetAllCreators = () => {
    const [creatorsData, setCreatorsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAPIData = async () => {
            try {
                const result = await gatAllCreators();
                setCreatorsData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAPIData();
    }, []);

    return { creatorsData, loading, error };
};

export default useGetAllCreators;