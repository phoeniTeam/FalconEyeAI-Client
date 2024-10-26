import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles';
import { FaSquarePlus } from 'react-icons/fa6';
import { PuffLoader } from 'react-spinners';
import { FaDownload } from "react-icons/fa6";
import { handleImageDownload } from '../apis/image/handleImageDownload';

function UploadAndTransformImagesBoxV2({ image, setImage, isProcessing }) {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
                uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
            },
            (error, result) => {
                if (error) {
                    console.error("Upload error:", error);
                } else if (result && result.event === "success") {
                    setImage(prev => ({
                        ...prev,
                        secureURL: result.info.secure_url,
                        publicId: result.info.public_id,
                    }))
                    console.log(image.secureURL)
                } else if (result && result.event === "cancel") {
                    setImage(prev => ({
                        ...prev,
                        secureURL: "",
                        publicId: "",
                        width: "",
                        height: ""
                    }))
                }
            }
        );
    }, []);

    const handleUpload = () => {
        widgetRef.current.open();
    };

    const renderTransformationImage = () => {
        if (isProcessing) {
            return <PuffLoader color='#fff' />;
        }

        if (image.transformationUrl) {
            return (
                <img
                    className='max-h-[300px] max-w-[300px] object-cover rounded-lg'
                    src={image.transformationUrl}
                    alt="Transformed"
                />
            );
        }

        return <span>Transformed Image</span>;
    };


    return (
        <>
            <div className="w-full flex flex-col sm:flex-row gap-8">
                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                    <div className={`${styles.heading4}`}>Original</div>
                    {
                        image.secureURL ? (
                            <div className='flex justify-center items-center border-2 border-grayLight rounded-lg'>
                                <img className='max-h-[300px] max-w-[300px] object-cover rounded-lg' src={image.secureURL} alt="Image" />
                            </div>
                        ) :
                            (
                                <div onClick={handleUpload} className="cursor-pointer border-2 border-grayLight rounded-lg">
                                    <div className="min-h-[400px] sm:min-h-[300px] flex flex-col justify-center items-center text-darkWhite">
                                        <FaSquarePlus
                                            className={`h-8 w-8 text-primary hover:text-secondary ${styles.transition500}`}
                                        />
                                        <span>Click here to upload</span>
                                    </div>
                                </div>
                            )
                    }
                </div>


                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                    <div className='flex justify-between items-center'>
                        <div className={`${styles.heading4}`}>Transformed</div>
                        {image.transformationUrl &&
                            <button
                                onClick={() => handleImageDownload(image.transformationUrl, image.title)}
                            >
                                <FaDownload
                                    className={`cursor-pointer text-grayLight hover:text-darkWhite ${styles.transition500}`}
                                />

                            </button>
                        }
                    </div>
                    <div className="border-2 border-grayLight rounded-lg">
                        <div className="min-h-[400px] sm:min-h-[300px] flex flex-col justify-center items-center text-darkWhite">
                            {renderTransformationImage()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UploadAndTransformImagesBoxV2;
