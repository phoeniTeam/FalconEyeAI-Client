import React, { useState, useEffect } from 'react';
import styles from '../../styles';
import { FaFilter } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import ImageCard from '../../components/ImageCard.jsx';
import useGetAllImages from '../../hooks/image/useGetAllImages.js';
import searchForImage from '../../utils/searchForTerm.js';
import Filter from '../../components/Filter.jsx';

function Home() {
    const [inputColor, setInputColor] = useState(false);
    const { imagesData, loadingImagesData, errorImagesData } = useGetAllImages();
    const [imagesWithUserInfo, setImagesWithUserInfo] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredImagesWithUserInfo, setFilteredImagesWithUserInfo] = useState([]);
    const [filterType, setFilterType] = useState('');
    const transformationMap = {
        'All': null, 
        'Image-Restore': 'image-restore',
        'Generative-Fill': 'generative-fill', 
        'Object-Removal': 'object-removal',   
        'Object-Recolor': 'object-recolor',
        'Background-Removal': 'e_background_removal',
    };

    useEffect(() => {
        if (imagesData && imagesData.images) {
            setImagesWithUserInfo(imagesData.images);
            setFilteredImagesWithUserInfo(imagesData.images);
        }
    }, [imagesData]);

    useEffect(() => {
        const searchedImages = searchForImage(searchTerm, imagesWithUserInfo);
        
        const dbValue = transformationMap[filterType];
        
        const filteredImages = dbValue && dbValue !== 'All'
            ? searchedImages.filter(image => {
                return image.transformationType.toLowerCase() === dbValue;
            })
            : searchedImages;
    
        setFilteredImagesWithUserInfo(filteredImages);
    }, [searchTerm, imagesWithUserInfo, filterType]);
    
    

    const handleFilterChange = (type) => {
        setFilterType(type);
    };

    if (loadingImagesData ) {
        return <div>Loading...</div>;
    }

    if (errorImagesData ) {
        return <div>Error loading data</div>;
    }
    return (
        <div className={`px-9 flex-grow py-8`}>
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
                            <IoSearch
                                size={24}
                                className="text-grayLight fill-current"
                            />
                            <input
                                type="search"
                                placeholder="Search..."
                                className="placeholder:text-grayLight w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </label>
                        <Filter
                            onFilterChange={handleFilterChange}
                        />
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-5">
                    {filteredImagesWithUserInfo.map((creation, index) => (
                        <ImageCard
                            key={index}
                            image={creation.transformationUrl}
                            description={creation.title}
                            userImage={creation.creatorId?.photo}
                            userName={creation.creatorId?.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
