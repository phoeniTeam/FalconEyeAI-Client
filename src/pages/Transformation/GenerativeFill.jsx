import React, { useEffect, useState } from 'react';
import styles from '../../styles';
import Input from '../../components/Input.jsx';
import CreditIcon from '../../assets/icons/creditIcon.jsx';
import { IoIosArrowDown } from 'react-icons/io';
import SmallCreditIcon from '../../assets/icons/SmallCreditIcon.jsx';
import UploadAndTransformImagesBoxV2 from '../../components/UploadAndTransformImagesBoxV2.jsx';
import { aspectRatioOptions, transformationsTypes } from '../../constants/editorConstants'
import { CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from "@cloudinary/url-gen/actions/resize";
import axios from 'axios';
import useGetCreator from '../../hooks/creator/useGetCreator'
import { createImage } from '../../apis/image/createImage';
import { updateCreatorCredit } from '../../apis/creator/updateCreatorCredit'
import { calculateNewCreditBalance } from '../../utils/calculateNewCreditBalance'
import { getCreatorLocalStorage } from '../../utils/getCreatorLocalStorage';
import { updateCreatorLocalStorage } from '../../utils/updateCreatorLocalStorage'

function GenerativeFill() {
    const [creditBalance, setCreditBalance] = useState(getCreatorLocalStorage().creator?.creditBalance || 0)

    const transformationType = "generative-fill"
    const [selectedAspectRatio, setSelectedAspectRatio] = useState('');
    const transformationPrice = transformationsTypes[transformationType].price
    const [isProcessing, setIsProcessing] = useState(false)
    const [image, setImage] = useState({
        title: "",
        transformationType: transformationType,
        publicId: "",
        secureURL: "",
        width: "",
        height: "",
        config: "",
        transformationUrl: "",
        aspectRatio: "",
        color: "",
        prompt: "",
        creatorId: getCreatorLocalStorage().creator._id
    })

    const keysToCheck = [
        'title',
        'publicId',
        'secureURL',
        'width',
        'height',
        'config',
        'transformationUrl',
        'aspectRatio',
        'color',
        'prompt',
    ];

    const isButtonActive =
        image.title.trim() !== '' && selectedAspectRatio.trim() !== '' && image.secureURL !== '' && creditBalance !== 0 && !isProcessing;

    const transformImage = async () => {
        setIsProcessing(true)
        if (image.publicId) {
            const myImage = new CloudinaryImage(image.publicId, {
                cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
            });

            const url = myImage.resize(fill()
                .width(aspectRatioOptions[selectedAspectRatio].width)
                .height(aspectRatioOptions[selectedAspectRatio].height)
                .aspectRatio(aspectRatioOptions[selectedAspectRatio].aspectRatio)
                .gravity("auto"))
                .toURL();

            await uploadTransformedImage(url);
        }
    };

    const uploadTransformedImage = async (imageUrl) => {
        try {
            const response = await axios.get(imageUrl, { responseType: 'blob' });
            const transformedImageBlob = response.data;

            const contentType = response.headers['content-type'];
            let fileExtension = 'jpg';
            if (contentType.includes('png')) {
                fileExtension = 'png';
            }

            const formData = new FormData();
            formData.append('file', transformedImageBlob, `${image.title}.${fileExtension}`);
            formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

            const uploadResponse = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, formData, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            setImage(prev => ({ ...prev, transformationUrl: uploadResponse.data.secure_url, aspectRatio: selectedAspectRatio, width: aspectRatioOptions[selectedAspectRatio].width, height: aspectRatioOptions[selectedAspectRatio].height }));

        } catch (error) {
            console.error('Upload failed:', error);
        } finally {
            setIsProcessing(false)
        }
    };


    useEffect(() => {
        if (image.transformationUrl && image.aspectRatio) {
            saveTheImageToDatabase();
        }
    }, [image.transformationUrl, image.aspectRatio]);

    const saveTheImageToDatabase = () => {
        const fetchAPIData = async () => {
            if (!image || !getCreatorLocalStorage().token) {
                console.log("image or authToken is not defined")
                return;
            }
            try {
                const result = await createImage(image, getCreatorLocalStorage().token);

                await updateBalance()
            } catch (error) {
                console.log(error)
            }
        };
        fetchAPIData();
    };

    const updateBalance = async () => {
        try {
            const newBalance = calculateNewCreditBalance(getCreatorLocalStorage().creator.creditBalance, -transformationPrice)
            await updateCreatorCredit(getCreatorLocalStorage().creator._id, getCreatorLocalStorage().token, newBalance)
            const updatedData = {
                creator: {
                    ...getCreatorLocalStorage().creator,
                    creditBalance: newBalance
                }
            };
            updateCreatorLocalStorage(updatedData);
            setCreditBalance(newBalance)
        } catch (error) {
            console.log(error)
        }
    }

    const hasValues = keysToCheck.some((key) => image[key] !== '') || selectedAspectRatio !== '';
    const resetImage = () => {
        setImage({
            title: '',
            transformationType: transformationType,
            publicId: '',
            secureURL: '',
            width: '',
            height: '',
            config: '',
            transformationUrl: '',
            aspectRatio: '',
            color: '',
            prompt: '',
            creatorId: getCreatorLocalStorage().creator._id,
        });
        setSelectedAspectRatio('')
    };


    return (
        <div className={`w-full flex flex-col justify-between gap-8`}>
            <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex items-center justify-between w-full ">
                    <div className={`${styles.heading3}`}>Generative Fill</div>
                    <div className="flex items-center justify-start gap-2 tooltip  tooltip-bottom  [--tooltip-color:#38383e] [--tooltip-text-color:#ffffff]" data-tip=" your credits">
                        <CreditIcon />
                        <div className={`${styles.heading4}`}>{creditBalance}</div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <div className={`${styles.paragraph2}`}>
                        Enhance an image's dimensions using AI outpainting
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <SmallCreditIcon /> 
                        <div className={`${styles.paragraph4}`}>
                            {transformationPrice} credits
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <Input
                    label="Image Title"
                    id="imageTitle"
                    value={image.title}
                    onChange={(e) => setImage(prev => ({ ...prev, title: e.target.value }))}
                    onReset={resetImage}
                    canReset={hasValues}
                    isProcessing={isProcessing}
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


                <UploadAndTransformImagesBoxV2 image={image} setImage={setImage} isProcessing={isProcessing} />

            </div>
            <div className="w-full p-2">
                <button
                    className={`btn ${styles.primaryBackground} w-full rounded-full min-h-9 h-12 border-none text-base font-normal ${isButtonActive ? styles.buttonActive : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!isButtonActive}
                    onClick={transformImage}
                >
                    Apply Transformation
                </button>
            </div>
        </div>
    );
}

export default GenerativeFill;
