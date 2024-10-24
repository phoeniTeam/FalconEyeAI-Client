import React, { useState } from 'react';
import styles from '../../styles';
import Input from '../../components/input';
import CreditIcon from '../../assets/icons/creditIcon';
import SmallCreditIcon from '../../assets/icons/smallCreditIcon';
import UploadAndTransformImagesBox from '../../components/UploadAndTransformImagesBox';
function BackgroundRemoval() {
    const [inputValue, setInputValue] = useState('');
    const isButtonActive = inputValue.trim() !== '';

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

           <UploadAndTransformImagesBox/>
            </div>
            <div className="w-full p-2">
                <button
                    className={`btn ${styles.primaryBackground} w-full rounded-full min-h-9 h-12 border-none text-base font-normal ${isButtonActive ? styles.buttonActive : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!isButtonActive}
                >
                    Apply Transformation
                </button>
            </div>
        </div>
    );
}

export default BackgroundRemoval;
