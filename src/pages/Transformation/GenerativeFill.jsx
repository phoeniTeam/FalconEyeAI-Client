import React, { useState } from 'react';
import styles from '../../styles';
import Input from '../../components/input';
import CreditIcon from '../../assets/icons/creditIcon';
import { IoIosArrowDown } from 'react-icons/io';
import SmallCreditIcon from '../../assets/icons/smallCreditIcon';
import UploadAndTransformImagesBox from '../../components/UploadAndTransformImagesBox';

function GenerativeFill() {
    const [imageTitle, setImageTitle] = useState('');
    const [selectedAspectRatio, setSelectedAspectRatio] = useState('');
    const [dimensions, setDimensions] = useState({ width: '', height: '' });

    const isButtonActive =
        imageTitle.trim() !== '' && selectedAspectRatio.trim() !== '';

    const aspectRatioOptions = {
        '1:1': {
            aspectRatio: '1:1',
            label: 'Square (1:1)',
            width: 1000,
            height: 1000,
        },
        '3:4': {
            aspectRatio: '3:4',
            label: 'Standard Portrait (3:4)',
            width: 1000,
            height: 1334,
        },
        '9:16': {
            aspectRatio: '9:16',
            label: 'Phone Portrait (9:16)',
            width: 1000,
            height: 1778,
        },
    };

    const handleApplyTransform = () => {
        const selectedOption = aspectRatioOptions[selectedAspectRatio];
        if (selectedOption) {
            setDimensions({
                width: selectedOption.width,
                height: selectedOption.height,
            });
        }
    };

    return (
        <div className={`w-full flex flex-col justify-between gap-8`}>
            <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex items-center justify-between w-full ">
                    <div className={`${styles.heading3}`}>Generative Fill</div>
                    <div className="flex items-center justify-start gap-2">
                        <CreditIcon />
                        <div className={`${styles.heading4}`}>236</div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <div className={`${styles.paragraph2}`}>
                        Enhance an image's dimensions using AI outpainting
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
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="aspectRatio"
                        className={`${styles.paragraph3}`}
                    >
                        Aspect Ratio
                    </label>
                    <div className="relative">
                        <select
                            id="aspectRatio"
                            value={selectedAspectRatio}
                            onChange={(e) =>
                                setSelectedAspectRatio(e.target.value)
                            }
                            className={`input input-bordered border border-grayLight 
                            focus-within:border-grayLight min-h-10 h-11 w-full outline-none 
                            focus:outline-none appearance-none text-white cursor-pointer`}
                        >
                            <option className='bg-base100' value="" disabled>
                                Select size
                            </option>
                            {Object.entries(aspectRatioOptions).map(([key, option]) => (
                                <option key={key} value={option.aspectRatio} className="bg-base100 cursor-pointer hover:bg-primary">
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <IoIosArrowDown />
                        </div>
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

export default GenerativeFill;
