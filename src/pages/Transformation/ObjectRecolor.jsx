import React, { useState } from 'react';
import styles from '../../styles';
import CreditIcon from '../../assets/icons/creditIcon';
import Input from '../../components/input';
import SmallCreditIcon from '../../assets/icons/smallCreditIcon';
import UploadAndTransformImagesBox from '../../components/UploadAndTransformImagesBox';

function ObjectRecolor() {
    const [imageTitle, setImageTitle] = useState('');
    const [objectName, setObjectName] = useState('');
    const [colors, setColors] = useState('');
    const isButtonActive =
        imageTitle.trim() !== '' &&
        objectName.trim() !== '' &&
        colors.trim() !== '';
    return (
        <div className="w-full flex flex-col justify-between gap-8">
            <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex items-center justify-between w-full">
                    <div className={`${styles.heading3} text-white `}>
                        Object Recolor
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <CreditIcon />

                        <div className={`${styles.heading4} text-white `}>
                            236
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <div className={`${styles.paragraph2} text-white `}>
                        Identify and recolor objects from image
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
                    value={imageTitle}
                    onChange={(e) => setImageTitle(e.target.value)}
                />
                <div className="grid grid-cols-2 justify-items-center gap-6   ">
                    <div className="w-full ">
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
                            id="Replacement Color"
                            value={colors}
                            onChange={(e) => setColors(e.target.value)}
                        />
                    </div>
                </div>
                <UploadAndTransformImagesBox />
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

export default ObjectRecolor;
