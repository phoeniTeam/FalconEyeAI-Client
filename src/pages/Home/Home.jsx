import React, { useState } from 'react';
import styles from '../../styles';
import { FaFilter } from 'react-icons/fa6';
import { creationsImages } from '../../assets';
import { CiSearch } from 'react-icons/ci';

function Home() {
    const [inputColor, setInputColor] = useState(false);
    return (
        <div className="flex-grow overflow-auto">
            <div className="pt-2 px-4 w-full flex flex-col justify-between gap-12 lg:gap-20">
                <div className={`${styles.heading3} text-center py-6 `}>
                    Unleash Your Creativity <br />
                    With{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                        FalconEye
                    </span>
                </div>
                <div className="flex flex-col gap-4 px-10">
                    <div className={`flex flex-col gap-2 py-3 `}>
                        <div className={`${styles.heading5}  `}>
                            {' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                                {' '}
                                Community{' '}
                            </span>
                            Creations
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <label
                                onFocus={() => setInputColor(true)}
                                onBlur={() => setInputColor(false)}
                                className={`flex items-center gap-2 input min-h-10 h-10 border border-grayLight outline-black
                ${inputColor ? 'bg-[#131313]' : ''} w-[60vw] lg:w-[38vw]  rounded-full 
               focus-within:border-grayLight focus-within:outline-none`}
                            >
                                <CiSearch className="h-5 w-5 text-grayLight" />
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    className=" placeholder:text-grayLight w-full"
                                />
                            </label>
                            <div className="btn btn-circle border-none bg-[#131313] hover:bg-[#131313] min-h-10 h-10 w-10 ">
                                <FaFilter className="text-grayLight w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 ">
                        {creationsImages.map((creation, index) => (
                            <div
                                key={index}
                                className="mb-4 break-inside-avoid cursor-pointer"
                            >
                                <img
                                    className={`${styles.transition500} rounded-xl opacity-80 hover:opacity-100`}
                                    src={creation}
                                    alt="Photo"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
