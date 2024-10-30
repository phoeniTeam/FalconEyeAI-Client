import React, { useState } from 'react';
import styles from '../styles';
import { logoSide } from '../assets';
import { HiHome } from 'react-icons/hi2';
import { FaImage } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { IoMdColorFill } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { SlMenu } from 'react-icons/sl';
import { FaUserAlt } from 'react-icons/fa';
import { MdHideImage } from 'react-icons/md';
import { HiMiniSquare2Stack } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import BasketIcon from '../assets/icons/basketIcon';
import { useNavigate } from 'react-router-dom';
import { getCreatorLocalStorage } from '../utils/getCreatorLocalStorage';
import useUserProfile from '../hooks/creator/useUserProfile'; 

function Sidebar() {
    const USER_LOCAL_STORAGE = import.meta.env.VITE_USER_LOCAL_STORAGE;
    const creatorLocalStorage = getCreatorLocalStorage();
    const { name , profilePhoto } = useUserProfile(); 
    const [userProfile, setUserProfile] = useState({
        name: name,
        profilePhoto: profilePhoto,
    });

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const sideLinks = [
        {
            label: 'Home',
            route: '/home',
            icon: <HiHome className="w-5 h-5 lg:w-6 lg:h-6 text-white" />,
        },
        {
            label: 'Image Restore',
            route: '/transformation/image-restore',
            icon: <FaImage className="w-5 h-5 lg:w-6 lg:h-6 text-white " />,
        },
        {
            label: 'Generative Fill',
            route: '/transformation/generative-fill',
            icon: <BsStars className="w-5 h-5 lg:w-6 lg:h-6 text-white " />,
        },
        {
            label: 'Object Removal',
            route: '/transformation/object-removal',
            icon: (
                <HiMiniSquare2Stack className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            ),
        },
        {
            label: 'Object Recolor',
            route: '/transformation/object-recolor',
            icon: (
                <IoMdColorFill className="w-5 h-5 lg:w-6 lg:h-6 text-white " />
            ),
        },
        {
            label: 'Background Removal',
            route: '/transformation/background-removal',
            icon: <MdHideImage className="w-5 h-5 lg:w-6 lg:h-6 text-white" />,
        },
    ];

    const subSideLinks = [
        {
            label: ' Buy Credit',
            route: '/credit',
            icon: <BasketIcon />,
        },
        {
            label: 'Profile',
            route: '/profile',
            icon: <FaUserAlt className="w-5 h-5 lg:w-5 lg:h-5 text-white" />,
        },
    ];

    const isActive = (route) => location.pathname === route;

    const logout = () => {
        localStorage.removeItem(USER_LOCAL_STORAGE);
        navigate('/');
    };

    return (
        <div className="flex">
            <SlMenu
                onClick={() => setIsOpen(!isOpen)}
                className="text-white w-6 h-6 m-4 lg:hidden cursor-pointer"
            />
            {/* Sidebar */}
            <div
                className={`fixed z-50 top-0 left-0 bg-[#040509] border-r border-[#575765] h-full pl-1 py-1 transition-transform transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 lg:relative lg:flex lg:flex-col w-64 max-md:w-52`}
            >
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-start py-2 pt-4 pl-4 pb-4 cursor-pointer lg:hidden"
                >
                    <IoClose className="text-white w-7 h-7" />
                </div>
                <Link to={"/"} className="mb-10 lg:pt-4 pl-3 pb-1 lg:pb-2">
                    <img
                        src={logoSide}
                        alt="logo"
                        className="w-[8.5rem] lg:w-[10.5vw] "
                    />
                </Link>

                <div className="flex flex-col justify-between h-[78%] md:h-[84%] lg:h-full">
                    <ul className="menu gap-1">
                        {sideLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.route}
                                    className={`flex items-center gap-3 p-2 pl-3 mb-[2px] rounded-full ${
                                        isActive(link.route)
                                            ? `${styles.primaryBackground}`
                                            : 'hover:bg-grayDark'
                                    }`}
                                >
                                    {link.icon}
                                    <span className={`${styles.paragraph4}`}>
                                        {link.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="menu">
                        {subSideLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.route}
                                    className={`flex items-center gap-3 p-2 pl-3 mb-[6px] rounded-full ${
                                        isActive(link.route)
                                            ? `${styles.primaryBackground}`
                                            : 'hover:bg-grayDark'
                                    }`}
                                >
                                    {link.label === 'Profile' ? (
                                        creatorLocalStorage?.creator?.photo ? (
                                            <img
                                                src={
                                                    profilePhoto
                                                }
                                                alt="profile image"
                                                className="h-7 w-7 rounded-full"
                                            />
                                        ) : (
                                            link.icon
                                        )
                                    ) : (
                                        link.icon
                                    )}

                                    <span className={`${styles.paragraph4}`}>
                                        {link.label === 'Profile'
                                            ? `${name || 'Profile'} `
                                            : link.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                        {creatorLocalStorage?.creator && (
                            <li>
                                <div
                                    onClick={logout}
                                    className={`cursor-pointer flex items-center gap-3 p-2 pl-3 rounded-full group hover:text-red-700 }`}
                                >
                                    <RiLogoutCircleLine className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-red-700" />
                                    <span
                                        className={`${styles.paragraph4} group-hover:text-red-700`}
                                    >
                                        {' '}
                                        Logout
                                    </span>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
