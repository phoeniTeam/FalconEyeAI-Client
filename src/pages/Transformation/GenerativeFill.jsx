import React, { useState } from 'react';
import styles from '../../styles';
import Input from '../../components/input';
import CreditIcon from '../../assets/icons/creditIcon';
import { FaSquarePlus } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

function GenerativeFill() {
    const [imageTitle, setImageTitle] = useState('');
    const [selectedAspectRatio, setSelectedAspectRatio] = useState('');
    const [dimensions, setDimensions] = useState({ width: '', height:'' }); 

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
        <div className="py-8 px-9 w-full flex flex-col justify-between gap-8 ">
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
                <div className="flex flex-col gap-2">
                    <label htmlFor="aspectRatio" className={`${styles.paragraph3}`}>
                        Aspect Ratio
                    </label>
                    <div className="relative">
                        <select
                            id="aspectRatio"
                            value={selectedAspectRatio}
                            onChange={(e) => setSelectedAspectRatio(e.target.value)}
                            className={`input input-bordered border border-grayLight 
                            focus-within:border-grayLight min-h-10 h-11 w-full outline-none 
                            focus:outline-none appearance-none text-white cursor-pointer`}
                        >
                            <option value="" disabled>
                                Select size
                            </option>
                            {Object.entries(aspectRatioOptions).map(([key, option]) => (
                                <option key={key} value={option.aspectRatio} className="text-grayDark">
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 lg:justify-items-center md:justify-items-center sm:justify-items-center max-sm:justify-center max-md:gap-4">
                    <div className="flex flex-col gap-2">
                        <div className={`${styles.heading4}`}>Original</div>
                        <div className="flex items-center justify-center border-2 border-grayLight p-10 w-96 min-h-72 max-h-96 rounded-lg cursor-pointer flex-grow max-sm:w-80">
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
                        <div
                            className={`w-96 max-h-96 flex items-center justify-center border-2 border-grayLight p-10 min-h-72 rounded-lg cursor-pointer flex-grow max-sm:w-80`}
                        >
                            <div className="flex flex-col items-center">
                                <div className="text-darkWhite">
                                    Transformed Image
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 justify-center w-full p-2 gap-4">
                <button
                    className={`btn ${styles.primaryBackground} rounded-full min-h-9 h-9 border-none text-base font-normal ${isButtonActive ? styles.buttonActive : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!isButtonActive}
                >
                    Apply Transformation
                </button>
                <button
                    className={`btn ${styles.primaryBackground} rounded-full min-h-9 h-9 border-none text-base font-normal`}
                >
                    Save image
                </button>
            </div>
        </div>
    );
}

export default GenerativeFill;
