import React, { useState } from 'react';
import styles from '../../styles';
import Input from '../../components/input';
import CreditIcon from '../../assets/icons/creditIcon';
import SmallCreditIcon from '../../assets/icons/smallCreditIcon';
import UploudAndtranforamtioncopy from '../../components/UploudAndtranforamtioncopy';
import axios from 'axios';
function BackgroundRemoval() {
    const [inputValue, setInputValue] = useState('');
    const isButtonActive = inputValue.trim() !== '';
    const [publicId, setPublicId] = useState("");
    const [transformedPublicId, setTransformedPublicId] = useState("");
    const [loading, setLoading] = useState(false);
    const handleUpload = (uploadPublicId)=>{
        setPublicId(uploadPublicId);
        setTransformedPublicId("");

    }

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
        
        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`
                , formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }
        );
            console.log("Upload successful:", response.data);
            return response.data;       
         } catch (error) {
            console.error("Upload Error:", error);
            throw error;
        }
    };


      

    const handleTransform = async () => {
        if (publicId) {
            setLoading(true); 
            try {
            const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
            const transformation = `e_background_removal`;

            const transformedImageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${publicId}`;
            
            const uploadResponse = await uploadImage(transformedImageUrl);
            setTransformedPublicId(uploadResponse.secure_url);  
              } catch (error) {
            console.error("Error transforming image:", error);
        }
        finally {
            setLoading(false); 
        }
        }
    };
  

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
                        <div className={`${styles.heading4} text-white `}>
                            {' '}
                            236
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <div className={`${styles.paragraph2} text-white `}>
                        Removes the background of the image using AI
                    </div>

                    <div className="flex items-center justify-start gap-4">
                        <SmallCreditIcon />
                        <div className={`${styles.paragraph2} text-white `}>
                            {' '}
                            12
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <Input
                    label="Image Title"
                    id="imageTitle"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

           <UploudAndtranforamtioncopy
           onUpload={handleUpload} 
           publicId={publicId}
           transformedPublicId={transformedPublicId}
           />
            </div>
            <div className="w-full p-2">
                <button
                    className={`btn ${styles.primaryBackground} w-full rounded-full min-h-9 h-12 border-none text-base font-normal ${isButtonActive ? styles.buttonActive : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!isButtonActive}
                    onClick={handleTransform}
                >
                    {loading ? 'Transforming...' : 'Apply Transformation'}                </button>
            </div>
        </div>
    );
}

export default BackgroundRemoval;
