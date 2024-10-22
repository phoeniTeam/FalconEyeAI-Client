import React, { useState } from 'react';
import styles from '../../styles';
import Input from '../../components/input';
import CreditIcon from '../../assets/icons/creditIcon';
import { FaSquarePlus } from 'react-icons/fa6';

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
                        <CreditIcon />
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
                <div className="flex items-center justify-between max-md:flex-col max-md:gap-4">
                    <div className="flex flex-col gap-2">
                        <div className={`${styles.heading4}`}>Original</div>
                        <div className="flex items-center justify-center border-2 border-grayLight p-10 w-96 min-h-72 max-h-96 rounded-lg cursor-pointer flex-grow max-sm:w-80 ">
                            <div className="flex flex-col items-center gap-1">
                                <FaSquarePlus className="h-8 w-8 text-primary " />
                                <span className="text-darkWhite">
                                    Click here to upload
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className={`${styles.heading4}`}>Transformed</div>
                        <div className="flex items-center justify-center border-2 border-grayLight p-10 w-96 min-h-72 max-h-96 rounded-lg cursor-pointer flex-grow max-sm:w-80 ">
                            <div className="flex flex-col items-center">
                                <div className="text-darkWhite">
                                    Transformed Image
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full p-2 gap-4 ">
                <button
                    className={`btn ${styles.primaryBackground} w-full rounded-full min-h-9 h-9 border-none text-base font-normal ${isButtonActive ? styles.buttonActive : 'opacity-50 cursor-not-allowed'} `}
                    disabled={!isButtonActive}
                >
                    Apply Transformation
                </button>
            </div>
        </div>
    );
}

export default ObjectRemoval;
