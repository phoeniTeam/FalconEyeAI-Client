import React, { useState } from 'react';
import styles from '../../styles';
import Input from '../../components/input';
import CreditIcon from '../../assets/icons/creditIcon';
import SmallCreditIcon from '../../assets/icons/smallCreditIcon';
import UploadAndTransformImagesBox from '../../components/UploadAndTransformImagesBox';

function ObjectRemoval() {
    const [imageTitle, setImageTitle] = useState('');
    const [objectName, setObjectName] = useState('');
    const isButtonActive = imageTitle.trim() !== '' && objectName.trim() !== '';

    return (
        <div className={`w-full flex flex-col justify-between gap-8`}>
            <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex items-center justify-between w-full ">
                    <div className={`${styles.heading3}`}>Object Removal</div>
                    <div className="flex items-center justify-start gap-2">
                        <CreditIcon />
                        <div className={`${styles.heading4}`}>236</div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <div className={`${styles.paragraph2}`}>
                        Identify and elimante objects from image
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <SmallCreditIcon />
                        <div className={`${styles.paragraph2}`}>12</div>
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
                <Input
                    label="Objet to Remove"
                    id="removeObject"
                    value={objectName}
                    onChange={(e) => setObjectName(e.target.value)}
                />
                <UploadAndTransformImagesBox />
            </div>
            <div className=" w-full p-2 gap-4 ">
                <button
                    className={`btn ${styles.primaryBackground} w-full rounded-full min-h-9 h-12 border-none text-base font-normal ${isButtonActive ? styles.buttonActive : 'opacity-50 cursor-not-allowed'} `}
                    disabled={!isButtonActive}
                >
                    Apply Transformation
                </button>
            </div>
        </div>
    );
}

export default ObjectRemoval;
