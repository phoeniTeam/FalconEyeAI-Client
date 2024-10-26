import React, { useEffect } from 'react';

const UploadWidget = ({ onUpload ,children }) => {
    useEffect(() => {
        if (!window.cloudinary) {
            console.error("Cloudinary library is not loaded.");
        }
    }, []);

    const handleUpload = () => {
        if (window.cloudinary) {
            window.cloudinary.openUploadWidget(
                {
                    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
                    uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
                    eager: [`e_background_removal`] ,
                    source: 'local',
                },
                (error, result) => {
                     if (error) {
                    console.error("Upload Error:", error);
                    return;
                }
                    if (result && result.event === 'success') {
                        onUpload(result.info.public_id);
                    }
                }
            );
        }
    };

    return (
        <button onClick={handleUpload}>
            {children}
        </button>
    );
};

export default UploadWidget;
