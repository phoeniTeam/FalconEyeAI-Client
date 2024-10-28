import React, { useState } from 'react'
import styles from '../../styles'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { revealingMotion } from '../../utils/motionSettings';
import { heroImage, logoSideLight } from '../../assets';

function CTA() {
    const USER_LOCAL_STORAGE = import.meta.env.VITE_USER_LOCAL_STORAGE
    const [isUserRegistered, setIsUserRegistered] = useState(localStorage.getItem(USER_LOCAL_STORAGE) !== null)

    return (
        <motion.section id='cta' className={` my-10 md:my-20 bg-grayDark`}
            {...revealingMotion}
        >
            <div className={`${styles.wrapper} overflow-hidden relative px-10 py-8 rounded-lg flex flex-col sm:flex-row justify-between`}>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col'>
                        <h2 className={`${styles.heading2}`}>
                            <span>Modify Your Creativity</span>
                            <span> With</span>
                        </h2>
                        <div className='mt-4 mb-10 max-w-[200px] sm:max-w-[300px]'>
                            <img src={logoSideLight} alt="Logo" />
                        </div>
                        {
                            isUserRegistered ?
                                (
                                    <Link to={"/sign-in"} className={`${styles.primaryButton} w-fit shadow-md`}>Lunch App Now</Link>
                                )
                                :
                                (
                                    <Link to={"/sign-up"} className={`${styles.primaryButton} w-fit shadow-md`}>Get Started Now</Link>
                                )
                        }
                    </div>
                </div>

                <div className='mt-14 max-h-[180px] sm:absolute sm:right-0 sm:top-32 sm:mt-0 sm:w-2/4'>
                    <img className='rounded-lg' src={heroImage} alt="CTA Image" />
                </div>
            </div>
        </motion.section>
    )
}

export default CTA