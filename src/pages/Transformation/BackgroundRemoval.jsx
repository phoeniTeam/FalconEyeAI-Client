import React, { useEffect, useState } from 'react';
import styles from '../../styles';
import Input from '../../components/input';
import CreditIcon from '../../assets/icons/creditIcon';
import SmallCreditIcon from '../../assets/icons/smallCreditIcon';
import UploudAndtranforamtioncopy from '../../components/UploudAndtranforamtioncopy';
import axios from 'axios';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { createImage } from '../../apis/image/createImage';
import { updateCreatorCredit } from '../../apis/creator/updateCreatorCredit'
import { calculateNewCreditBalance } from '../../utils/calculateNewCreditBalance'
import { getCreatorLocalStorage } from '../../utils/getCreatorLocalStorage';
import { updateCreatorLocalStorage } from '../../utils/updateCreatorLocalStorage'
import { transformationsTypes } from '../../constants/editorConstants'

function BackgroundRemoval() {

    // const [publicId, setPublicId] = useState("");
    // const [transformedPublicId, setTransformedPublicId] = useState("");
    // const [loading, setLoading] = useState(false);
    // const handleUpload = (uploadPublicId)=>{
    //     setPublicId(uploadPublicId);
    //     setTransformedPublicId("");

    // }
    
    const transformationType = "e_background_removal"
    const transformationPrice = transformationsTypes[transformationType].price
    const [isProcessing, setIsProcessing] = useState(false)
    const [image, setImage] = useState({
        title: "",
        transformationType: transformationType,
        publicId: "",
        secureURL: "",
        width: "",
        height: "",
        config: "",
        transformationUrl: "",
        aspectRatio: "",
        color: "",
        prompt: "",
        creatorId: getCreatorLocalStorage().creator._id
    })

    const isButtonActive =  image.title.trim() !== '' && image.secureURL !== '';


    // const uploadImage = async (file) => {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
        
    //     try {
    //         const response = await axios.post(
    //             `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`
    //             , formData,{
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             },
    //         }
    //     );
    //         console.log("Upload successful:", response.data);
    //         return response.data;       
    //      } catch (error) {
    //         console.error("Upload Error:", error);
    //         throw error;
    //     }
    // };

    const transformImage = async () => {
        setIsProcessing(true)
        if (image.publicId) {
            const myImage = new CloudinaryImage(image.publicId, {
                cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
            });

            // const transformationUrl = `https://res.cloudinary.com/${myImage}/image/upload/${transformationType}/${image.publicId}`;
            // const transformationUrl = `https://res.cloudinary.com/${myImage}/image/upload//${image.publicId}`;

            const transformationUrl = `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/e_background_removal/${image.publicId}`;
            await uploadTransformedImage(transformationUrl);
        }
    };
    const uploadTransformedImage = async (imageUrl) => {
        try {
            const response = await axios.get(imageUrl, { responseType: 'blob' });
            const transformedImageBlob = response.data;

            const formData = new FormData();
            formData.append('file', transformedImageBlob, `${image.title}.png`);
            formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

            const uploadResponse = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, formData);
            
            setImage(prev => ({ ...prev, transformationUrl: uploadResponse.data.secure_url }));
        } catch (error) {
            console.error('Upload failed:', error);
        } finally {
            setIsProcessing(false);
        }
    };



    useEffect(() => {
        if (image.secureURL) {
            saveTheImageToDatabase();
        }
    }, [image.secureURL]);

    const saveTheImageToDatabase = () => {
        const fetchAPIData = async () => {
            if (!image || !getCreatorLocalStorage().token) {
                console.log("image or authToken is not defined")
                return;
            }
            try {
                const result = await createImage(image, getCreatorLocalStorage().token);

                const newBalance = calculateNewCreditBalance(getCreatorLocalStorage().creator.creditBalance, -transformationPrice)
                updateCreatorCredit(getCreatorLocalStorage().creator._id, getCreatorLocalStorage().token, newBalance)
                const updatedData = {
                    creator: {
                        ...getCreatorLocalStorage().creator,
                        creditBalance: newBalance
                    }
                };
                updateCreatorLocalStorage(updatedData);

            } catch (error) {
                console.log(error)
            }
        };
        fetchAPIData();
    };




      

    // const handleTransform = async () => {
    //     if (publicId) {
    //         setLoading(true); 
    //         try {
    //         const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    //         const transformation = `e_background_removal`;

    //         const transformedImageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${publicId}`;
            
    //         const uploadResponse = await uploadImage(transformedImageUrl);
    //         setTransformedPublicId(uploadResponse.secure_url);  
    //           } catch (error) {
    //         console.error("Error transforming image:", error);
    //     }
    //     finally {
    //         setLoading(false); 
    //     }
    //     }
    // };
  

    return (
        <div className="w-full flex flex-col justify-between gap-8">
            <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex items-center justify-between w-full">
                    <div className={`${styles.heading3} text-white `}>
                        {' '}
                        Background Removal
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <CreditIcon />
                        <div className={`${styles.heading4}`}>{getCreatorLocalStorage().creator?.creditBalance !== undefined ? getCreatorLocalStorage().creator.creditBalance : 0}</div>

                    </div>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <div className={`${styles.paragraph2} text-white `}>
                        Removes the background of the image using AI
                    </div>

                    <div className="flex items-center justify-start gap-4">
                        <SmallCreditIcon />
                        <div className={`${styles.paragraph2}`}>{transformationPrice}</div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
            <Input
                    label="Image Title"
                    id="imageTitle"
                    value={image.title}
                    onChange={(e) => setImage(prev => ({ ...prev, title: e.target.value }))}
                />

           <UploudAndtranforamtioncopy
           image={image} setImage={setImage} isProcessing={isProcessing}
           />
            </div>
            <div className="w-full p-2">
                <button
                    className={`btn ${styles.primaryBackground} w-full rounded-full min-h-9 h-12 border-none text-base font-normal ${isButtonActive ? styles.buttonActive : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!isButtonActive}
                    onClick={transformImage}
                >
                    {/* {loading ? 'Transforming...' : 'Apply Transformation'}     */}
                    Apply Transformation

                                </button>
            </div>
        </div>
    );
}

export default BackgroundRemoval;
