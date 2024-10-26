import React from 'react';
import styles from '../styles';
import { FaSquarePlus } from 'react-icons/fa6';
import { useState } from "react";
import UploadWidget from "./UploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";




function UploudAndtranforamtioncopy({onUpload  ,publicId ,transformedPublicId ,loading}) {
    // const [publicId, setPublicId] = useState("");
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const cld = new Cloudinary({
        cloud: {
          cloudName
        }
      });
      const originalImage = publicId ? cld.image(publicId) : null;


     const handleUploud = (uploadPublicId)=>{
        onUpload(uploadPublicId);

     }

    return (
        <>
            <div className="w-full flex flex-col sm:flex-row gap-8">
                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                    <div className={`${styles.heading4}`}>Original</div>
                    <div className="border-2 border-grayLight rounded-lg">
                        <div className="min-h-[400px] sm:min-h-[300px] flex flex-col justify-center items-center text-darkWhite">
                        {originalImage  ? (
                                <AdvancedImage
                                    style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
                                    cldImg={originalImage }
                                    plugins={[ placeholder()]}
                                />
                            ) : (
                                <UploadWidget onUpload={handleUploud}>
                                    <div className='flex flex-col items-center'>
                                        <FaSquarePlus
                                            className={`h-8 w-8 text-primary hover:text-secondary ${styles.transition500}`}
                                        />
                                        <span>Click here to upload</span>
                                    </div>
                                </UploadWidget>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                    <div className={`${styles.heading4}`}>Transformed</div>
                    <div className="border-2 border-grayLight rounded-lg">
                        <div className="min-h-[400px] sm:min-h-[300px] flex flex-col justify-center items-center text-darkWhite">
                        {loading ? (
                          <div className="loader">Loading...</div>
                         ): transformedPublicId? (
                            <AdvancedImage 
                            style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
                            cldImg={cld.image(transformedPublicId)}
                            plugins={[placeholder()]}
                            />
                           ):(
                            <span>Transformed Image</span>

                           )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UploudAndtranforamtioncopy;
