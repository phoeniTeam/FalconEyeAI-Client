import { useState, useEffect } from 'react';
import { getImage } from '../../apis/image/getImage';

const useGetImage = (id) => {
    const [imageData, setImageData] = useState(null);
    const [loadingImageData, setLoadingImageData] = useState(true);
    const [errorImageData, setErrorImageData] = useState(null);

    useEffect(() => {
        const fetchAPIData = async () => {
            try {
                const result = await getImage(id);
                setImageData(result);
            } catch (error) {
                setErrorImageData(error);
            } finally {
                setLoadingImageData(false);
            }
        };

        fetchAPIData();
    }, [id]);

    return { imageData, loadingImageData, errorImageData };
};

export default useGetImage;
