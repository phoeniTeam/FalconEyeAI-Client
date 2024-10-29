import React, { useEffect, useState } from 'react';
import styles from '../../styles';
import CreditIcon from '../../assets/icons/creditIcon';
import Input from '../../components/input';
import SmallCreditIcon from '../../assets/icons/smallCreditIcon';
import { transformationsTypes } from '../../constants/editorConstants';
import { getCreatorLocalStorage } from '../../utils/getCreatorLocalStorage';
import { updateCreatorLocalStorage } from '../../utils/updateCreatorLocalStorage';
import { createImage } from '../../apis/image/createImage';
import { updateCreatorCredit } from '../../apis/creator/updateCreatorCredit';
import { calculateNewCreditBalance } from '../../utils/calculateNewCreditBalance';
import UploadAndTransformImagesBoxV2 from '../../components/UploadAndTransformImagesBoxV2';
import axios from 'axios';
import { CloudinaryImage } from '@cloudinary/url-gen';
import {
    generativeRestore,
    upscale,
    enhance,
} from '@cloudinary/url-gen/actions/effect';
import { improve } from '@cloudinary/url-gen/actions/adjust';
import { FiRefreshCcw } from 'react-icons/fi';

function ImageRestore() {
    const transformationType = 'image-restore';
    const transformationPrice = transformationsTypes[transformationType].price;
    const [isProcessing, setIsProcessing] = useState(false);
    const [creditBalance, setCreditBalance] = useState(
        getCreatorLocalStorage().creator?.creditBalance || 0
    );
    const [image, setImage] = useState({
        title: '',
        transformationType: transformationType,
        publicId: '',
        secureURL: '',
        width: '',
        height: '',
        config: '',
        transformationUrl: '',
        aspectRatio: '',
        color: '',
        prompt: '',
        creatorId: getCreatorLocalStorage().creator._id,
    });

    const keysToCheck = [
        'title',
        'publicId',
        'secureURL',
        'width',
        'height',
        'config',
        'transformationUrl',
        'aspectRatio',
        'color',
        'prompt',
    ];

    const isButtonActive =
        image.title.trim() !== '' &&
        image.secureURL !== '' &&
        creditBalance > 0 &&
        !isProcessing;

    const transformImage = async () => {
        setIsProcessing(true);
        if (image.publicId) {
            const myImage = new CloudinaryImage(image.publicId, {
                cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
            });

            const url = myImage
                .effect(generativeRestore())
                .effect(upscale())
                .effect(enhance())
                .adjust(improve())
                .toURL();

            await uploadTransformedImage(url);
        }
    };

    const uploadTransformedImage = async (imageUrl) => {
        try {
            const response = await axios.get(imageUrl, {
                responseType: 'blob',
            });
            const transformedImageBlob = response.data;

            const contentType = response.headers['content-type'];
            let fileExtension = 'jpg';
            if (contentType.includes('png')) {
                fileExtension = 'png';
            }

            const formData = new FormData();
            formData.append(
                'file',
                transformedImageBlob,
                `${image.title}.${fileExtension}`
            );
            formData.append(
                'upload_preset',
                import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
            );

            const uploadResponse = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formData,
                {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                    },
                }
            );

            setImage((prev) => ({
                ...prev,
                transformationUrl: uploadResponse.data.secure_url,
            }));
        } catch (error) {
            console.error('Upload failed:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    useEffect(() => {
        if (image.transformationUrl) {
            saveTheImageToDatabase();
        }
    }, [image.transformationUrl]);

    const saveTheImageToDatabase = () => {
        const fetchAPIData = async () => {
            if (!image || !getCreatorLocalStorage().token) {
                console.log('image or authToken is not defined');
                return;
            }
            try {
                const result = await createImage(
                    image,
                    getCreatorLocalStorage().token
                );

                const newBalance = calculateNewCreditBalance(
                    getCreatorLocalStorage().creator.creditBalance,
                    -transformationPrice
                );
                updateCreatorCredit(
                    getCreatorLocalStorage().creator._id,
                    getCreatorLocalStorage().token,
                    newBalance
                );
                const updatedData = {
                    creator: {
                        ...getCreatorLocalStorage().creator,
                        creditBalance: newBalance,
                    },
                };
                updateCreatorLocalStorage(updatedData);
                setCreditBalance(newBalance);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPIData();
    };
    const hasValues = keysToCheck.some((key) => image[key] !== '');
    const resetImage = () => {
        setImage({
            title: '',
            transformationType: transformationType,
            publicId: '',
            secureURL: '',
            width: '',
            height: '',
            config: '',
            transformationUrl: '',
            aspectRatio: '',
            color: '',
            prompt: '',
            creatorId: getCreatorLocalStorage().creator._id,
        });
    };
    return (
        <div className="w-full flex flex-col justify-between gap-8 ">
            <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex items-center justify-between w-full">
                    <div className={`${styles.heading3} text-white `}>
                        Image Restore
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <CreditIcon />

                        <div className={`${styles.heading4} text-white `}>
                            {creditBalance}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                    <div className={`${styles.paragraph2} text-white `}>
                        Refine images by removing noise and imperfections
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <SmallCreditIcon />
                        <div className={`${styles.paragraph2} text-white `}>
                            {transformationPrice}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <Input
                    label="Image Title"
                    id="imageTitle"
                    value={image.title}
                    onChange={(e) =>
                        setImage((prev) => ({ ...prev, title: e.target.value }))
                    }
                    onReset={resetImage}
                    canReset={hasValues}
                    isProcessing={isProcessing}
                />
                <UploadAndTransformImagesBoxV2
                    image={image}
                    setImage={setImage}
                    isProcessing={isProcessing}
                />
            </div>
            <div className="w-full p-2">
                <button
                    className={`btn ${styles.primaryBackground} w-full rounded-full min-h-9 h-12 border-none text-base font-normal ${isButtonActive ? styles.buttonActive : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!isButtonActive}
                    onClick={transformImage}
                >
                    Apply Transformation
                </button>
            </div>
        </div>
    );
}

export default ImageRestore;
