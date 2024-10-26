import React, { useState, useEffect } from 'react';
import styles from '../../styles';
import { FaFilter } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import ImageCard from '../../components/ImageCard.jsx';
import useGetAllImages from '../../hooks/image/useGetAllImages.js';
import useGetAllCreators from '../../hooks/creator/useGetAllCreators.js';
import searchForImage from '../../utils/searchForTerm.js';

function Home() {
    const [inputColor, setInputColor] = useState(false);
    const { imagesData, loadingImagesData, errorImagesData } = useGetAllImages();
    const { creatorsData, loadingCreatorsData, errorCreatorsData } = useGetAllCreators();
    const [imagesWithUserInfo, setImagesWithUserInfo] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredImagesWithUserInfo, setFilteredImagesWithUserInfo] = useState([]);


    useEffect(() => {
        if (imagesData && creatorsData) {
            const combinedData = imagesData.images.map((image) => {
                const creator = creatorsData.find(user => user._id === image.creatorId);
                return {
                    ...image,
                    username: creator?.name || 'Unknown User',
                    avatar: creator?.photo || 'https://via.placeholder.com/150',
                };
            });
            setImagesWithUserInfo(combinedData);
            setFilteredImagesWithUserInfo(combinedData);
        }
    }, [imagesData, creatorsData]);


    console.log(imagesWithUserInfo);

    useEffect(() => {
        setFilteredImagesWithUserInfo(searchForImage(searchTerm, imagesWithUserInfo));
    }, [searchTerm, imagesWithUserInfo]);


    if (loadingImagesData || loadingCreatorsData) {
        return <div>Loading...</div>;
    }

    if (errorImagesData || errorCreatorsData) {
        return <div>Error loading data</div>;
    }
    return (
        <div className={`px-9 flex-grow overflow-auto py-8`}>
            <div className="w-full flex flex-col justify-between">
                <div className={`${styles.heading1} text-center`}>
                    Unleash Your Creativity <br />
                    With{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                        FalconEye
                    </span>
                </div>
                <div className="flex flex-col gap-2 pb-5 pt-10">
                    <div className={`${styles.heading5}`}>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                            Community{' '}
                        </span>
                        Creations
                    </div>
                    <div className="flex justify-start items-center gap-2">
                        <label
                            onFocus={() => setInputColor(true)}
                            onBlur={() => setInputColor(false)}
                            className={`flex items-center gap-2 input min-h-10 h-10 border border-grayLight outline-black ${inputColor ? 'bg-[#131313]' : ''} w-[55vw] lg:w-[38vw] rounded-full focus-within:border-grayLight focus-within:outline-none`}
                        >
                            <IoSearch size={24} className="text-grayLight fill-current" />
                            <input
                                type="search"
                                placeholder="Search..."
                                className="placeholder:text-grayLight w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </label>
                        <div className="btn btn-circle border-none bg-[#131313] hover:bg-[#131313] min-h-10 h-10 w-10 ">
                            <FaFilter className="text-grayLight w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-5">
                    {filteredImagesWithUserInfo.map((creation, index) => (
                        <ImageCard
                            key={index}
                            image={creation.transformationUrl}
                            description={creation.title}
                            userImage={creation.avatar}
                            userName={creation.username}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
