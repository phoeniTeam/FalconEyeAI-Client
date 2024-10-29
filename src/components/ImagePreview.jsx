import useGetImage from "../hooks/image/useGetImage"
import { IoClose } from "react-icons/io5";
import styles from "../styles";
import { handleImageDownload } from "../apis/image/handleImageDownload";
import { FaDownload } from "react-icons/fa6";

function ImagePreview({ imagePreviewState, setImagePreviewState }) {
    const { imageData, loadingImageData, errorImageData } = useGetImage(imagePreviewState.id)

    if (!loadingImageData) {
        return (
            <>
                <div className="w-full px-8 z-[60] fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex justify-center">
                    <div className="max-w-[800px]  bg-base100 p-6 rounded-xl">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div>
                                    <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" src={imageData.creatorId.photo} alt="" />
                                </div>

                                <p className={`text-darkWhite`}>{imageData.creatorId.name}</p>
                            </div>

                            <IoClose onClick={() => setImagePreviewState(prev => ({ ...prev, isOpen: false }))}
                                className={`h-6 w-6 cursor-pointer text-grayLight hover:text-darkWhite ${styles.transition500}`}
                            />
                        </div>

                        <div className="flex flex-col mt-12 mb-4">
                            <h2 className={`${styles.heading3}`}>{imageData.title}</h2>
                            <p className="text-darkWhite">{imageData.transformationType}</p>
                        </div>


                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="w-full sm:w-1/2">
                                <div className="flex justify-between items-center">
                                    <h3 className={`mb-1 ${styles.paragraph1} text-darkWhite`}>Original</h3>
                                    <button
                                        onClick={() => handleImageDownload(imageData.secureURL, imageData.title)}
                                    >
                                        <FaDownload
                                            className={`cursor-pointer text-grayLight hover:text-darkWhite ${styles.transition500}`}
                                        />

                                    </button>
                                </div>
                                <div>
                                    <img className="rounded-xl" src={imageData.secureURL} alt="Image" />
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2">
                                <div className="flex justify-between items-center">
                                    <h3 className={`mb-1 ${styles.paragraph1} text-darkWhite`}>Transformed</h3>
                                    <button
                                        onClick={() => handleImageDownload(imageData.transformationUrl, imageData.title)}
                                    >
                                        <FaDownload
                                            className={`cursor-pointer text-grayLight hover:text-darkWhite ${styles.transition500}`}
                                        />

                                    </button>
                                </div>
                                <div>
                                    <img className="rounded-xl" src={imageData.transformationUrl} alt="Image" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="z-50 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-[100vh] 
                bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"></div>
            </>
        )

    }
}

export default ImagePreview