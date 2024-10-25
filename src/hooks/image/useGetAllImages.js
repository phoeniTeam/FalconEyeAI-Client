import { useState, useEffect } from 'react';
import { gatAllImages } from '../../apis/image/getAllImages';

const useGetAllImages = () => {
    const [imagesData, setImagesData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAPIData = async () => {
            try {
                const result = await gatAllImages();
                setImagesData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAPIData();
    }, []);

    return { imagesData, loading, error };
};

export default useGetAllImages;