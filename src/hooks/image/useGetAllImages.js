import { useState, useEffect } from 'react';
import { gatAllImages } from '../../apis/image/getAllImages';

const useGetAllImages = () => {
    const [imagesData, setImagesData] = useState(null);
    const [loadingImagesData, setLoadingImagesData] = useState(true);
    const [errorImagesData, setErrorImagesData] = useState(null);

    useEffect(() => {
        const fetchAPIData = async () => {
            try {
                const result = await gatAllImages();
                setImagesData(result);
            } catch (error) {
                setErrorImagesData(error);
            } finally {
                setLoadingImagesData(false);
            }
        };

        fetchAPIData();
    }, []);

    return { imagesData, loadingImagesData, errorImagesData };
};

export default useGetAllImages;