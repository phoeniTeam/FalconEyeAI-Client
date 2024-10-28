import React, { useState, useEffect } from "react";
import { getUserInfo } from '../../utils/getUserInfo'; 
import { FaUserTie, FaFilter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import styles from "../../styles";
import Modal from '../Profile/Modal';
import ImageCard from '../../components/ImageCard.jsx'; 
import CreditIcon from "../../assets/icons/creditIcon"; 

function Profile() {
    const [inputColor, setInputColor] = useState(false); 
    const [name, setName] = useState(""); 
    const [userName, setUserName] = useState("");
    const [creditBalance, setCreditBalance] = useState(0);
    const [creations, setCreations] = useState([]); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true); 

    const fetchUserData = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_CREATORS_API);
            if (!response.ok) throw new Error('Failed to fetch user data from server.');

            const serverData = await response.json();
            const { id: loggedInUserId } = getUserInfo(); 
            
            const userData = serverData.find(user => user._id === loggedInUserId); 

            if (userData) {
                setCreditBalance(userData.creditBalance);
                setName(userData.name);
                setUserName(userData.username);
                setCreations(userData.creations || []); 
            } else {
                console.error('Logged-in user not found in server data.');
                throw new Error('User not found');
            }
        } catch (err) {
            console.error('Fetching from server failed, trying local storage:', err);
            const { creditBalance: localCreditBalance, name: localName, username: localUserName } = getUserInfo();
            setCreditBalance(localCreditBalance);
            setName(localName);
            setUserName(localUserName);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className={styles.innerWrapper}>
            {loading ? (
                <div>Loading...</div> 
            ) : (
                <>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="relative w-24 h-24 flex justify-center items-center bg-[#1d1a1a] rounded-full">
                                <FaUserTie
                                    size={48}
                                    className="text-white cursor-pointer"
                                    onClick={() => setIsModalOpen(true)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <input
                                    className="bg-transparent text-white outline-none mt-1 pr-16 py-1"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Edit your name"
                                />
                                <input
                                    className="bg-transparent text-gray-400 outline-none py-1"
                                    value={userName} 
                                    readOnly
                                    placeholder="Username"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-14">
                            <CreditIcon />
                            <div className={`${styles.heading4}`}>{creditBalance}</div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between mt-6">
                        <div className="mt-10">
                            <div className={`flex space-x-2 mt-4 mb-4 ${styles.paragraph1}`}>
                                <span>Your</span>
                                <span className={styles.primaryText}>Creations</span>
                            </div>

                            <div className="flex justify-start items-center gap-2">
                                <label
                                    onFocus={() => setInputColor(true)}
                                    onBlur={() => setInputColor(false)}
                                    className={`flex items-center gap-2 input min-h-10 h-10 border border-grayLight outline-black ${inputColor ? "bg-[#131313]" : ""} w-[38vw] rounded-full focus-within:border-grayLight focus-within:outline-none`}
                                >
                                    <IoSearch size={24} className="text-grayLight fill-current" />
                                    <input
                                        type="search"
                                        placeholder="Search..."
                                        className="placeholder:text-grayLight w-full bg-transparent outline-none"
                                    />
                                </label>
                                <div className="btn btn-circle border-none bg-[#131313] hover:bg-[#131313] min-h-10 h-10 w-10">
                                    <FaFilter className="text-grayLight w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-5">
                            {creations.map((creation, index) => (
                                <ImageCard 
                                    key={index}
                                    image={creation.image}
                                    description={creation.title} 
                                />
                            ))}
                        </div>
                    </div>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </>
            )}
        </div>
    );
}

export default Profile;
