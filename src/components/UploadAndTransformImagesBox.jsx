import React from 'react';
import styles from '../styles';
import { FaSquarePlus } from 'react-icons/fa6';

function UploadAndTransformImagesBox() {
    return (
        <>
            <div className="w-full flex flex-col sm:flex-row gap-8">
                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                    <div className={`${styles.heading4}`}>Original</div>
                    <div className="border-2 border-grayLight rounded-lg">
                        <div className="min-h-[400px] sm:min-h-[300px] flex flex-col justify-center items-center text-darkWhite">
                            <FaSquarePlus
                                className={`h-8 w-8 text-primary hover:text-secondary ${styles.transition500}`}
                            />
                            <span>Click here to upload</span>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col gap-2">
                    <div className={`${styles.heading4}`}>Transformed</div>
                    <div className="border-2 border-grayLight rounded-lg">
                        <div className="min-h-[400px] sm:min-h-[300px] flex flex-col justify-center items-center text-darkWhite">
                            Transformed Image
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UploadAndTransformImagesBox;
