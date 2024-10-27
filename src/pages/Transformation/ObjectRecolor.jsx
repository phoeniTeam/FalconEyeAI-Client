import React, { useState, useEffect } from 'react';
import styles from '../../styles';
import CreditIcon from '../../assets/icons/creditIcon';
import Input from '../../components/input';
import SmallCreditIcon from '../../assets/icons/smallCreditIcon';
import UploadAndTransformImagesBoxV2 from '../../components/UploadAndTransformImagesBoxV2';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { generativeRecolor } from "@cloudinary/url-gen/actions/effect";
import { improve } from '@cloudinary/url-gen/actions/adjust';
import { enhance } from '@cloudinary/url-gen/actions/effect';
import axios from 'axios';
import { createImage } from '../../apis/image/createImage';
import { updateCreatorCredit } from '../../apis/creator/updateCreatorCredit';
import { calculateNewCreditBalance } from '../../utils/calculateNewCreditBalance';
import { getCreatorLocalStorage } from '../../utils/getCreatorLocalStorage';
import { updateCreatorLocalStorage } from '../../utils/updateCreatorLocalStorage';
import { transformationsTypes } from '../../constants/editorConstants'

function ObjectRecolor() {
    const transformationType = "object-recolor";
    const transformationPrice = transformationsTypes[transformationType].price; 

    const [isProcessing, setIsProcessing] = useState(false);
    const [imageTitle, setImageTitle] = useState('');
    const [objectName, setObjectName] = useState('');
    const [colors, setColors] = useState('');
    
    const [image, setImage] = useState({
        title: '',
        transformationType: transformationType,
        publicId: '',
        secureURL: '',
        transformationUrl: '',
        aspectRatio: '',
        color: '',
        objectColor: '',
        prompt: '',
        creatorId: getCreatorLocalStorage()?.creator._id
    });

    const isButtonActive = imageTitle.trim() !== '' && objectName.trim() !== '' && colors.trim() !== '';

    const transformImage = async () => {
        setIsProcessing(true);
        console.log('Transforming image:', image); 

        if (image.publicId) {
            try {
                const myImage = new CloudinaryImage(image.publicId, {
                    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
                });

                const url = myImage
                .effect(generativeRecolor(objectName, colors))  
                .effect(enhance())
                .adjust(improve())
                .toURL();
                console.log('Generated URL:', url); 
                await uploadTransformedImage(url);

            } catch (error) {
                console.error('Transformation error:', error);
            }
        } else {
            console.error('No publicId found in image state.'); 
        }
    };

    const uploadTransformedImage = async (imageUrl) => {
        try {
            const response = await axios.get(imageUrl, { responseType: 'blob' });
            const transformedImageBlob = response.data;
            const contentType = response.headers['content-type'];
            const fileExtension = contentType.includes('png') ? 'png' : 'jpg';

            const formData = new FormData();
            formData.append('file', transformedImageBlob, `${image.title}.${fileExtension}`);
            formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

            const uploadResponse = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, formData, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            setImage(prev => ({
                ...prev,
                transformationUrl: uploadResponse.data.secure_url,
                objectColor: colors,
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
                console.log("image or authToken is not defined");
                return;
            }
            try {
                const result = await createImage(image, getCreatorLocalStorage().token);
                console.log('Image saved to database:', result); 

                const newBalance = calculateNewCreditBalance(getCreatorLocalStorage().creator.creditBalance, -transformationPrice);
                await updateCreatorCredit(getCreatorLocalStorage().creator._id, getCreatorLocalStorage().token, newBalance);

                const updatedData = {
                    creator: {
                        ...getCreatorLocalStorage().creator,
                        creditBalance: newBalance
                    }
                };
                updateCreatorLocalStorage(updatedData);
            } catch (error) {
                console.log('Error saving image to database:', error);
            }
        };
        fetchAPIData();
    };

    return (
        <div className="w-full flex flex-col justify-between gap-8">
            <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex items-center justify-between w-full">
                    <div className={`${styles.heading3} text-white`}>
                        Object Recolor
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <CreditIcon />
                        <div className={`${styles.heading4} text-white`}>
                            {getCreatorLocalStorage()?.creator?.creditBalance || 0}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <div className={`${styles.paragraph2} text-white`}>
                        Identify and recolor objects from image
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <SmallCreditIcon />
                        <div className={`${styles.paragraph2} text-white`}>
                            {transformationPrice}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <Input
                    label="Image Title"
                    id="imageTitle"
                    value={imageTitle}
                    onChange={(e) => setImageTitle(e.target.value)}
                />
                <div className="grid grid-cols-2 justify-items-center gap-6">
                    <div className="w-full">
                        <Input
                            label="Object to Recolor"
                            id="ObjectToRecolor"
                            value={objectName}
                            onChange={(e) => setObjectName(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            label="Replacement Color"
                            id="ReplacementColor"
                            value={colors}
                            onChange={(e) => setColors(e.target.value)}
                        />
                    </div>
                </div>
                <UploadAndTransformImagesBoxV2 image={image} setImage={setImage} isProcessing={isProcessing} />
            </div>
            <div className="w-full p-2">
                <button
                    className={`${styles.primaryBackground} w-full rounded-full min-h-9 h-12 border-none text-base font-normal ${isButtonActive ? styles.buttonActive : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!isButtonActive}
                    onClick={transformImage}
                >
                    Apply Transformation
                </button>
            </div>
        </div>
    );
}

export default ObjectRecolor;


