import React, { useState } from 'react'
import styles from '../../styles'
import { catImage, purpleFlowerImage, lamobCarImage, moonImage, heroImage } from '../../assets'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { revealingMotion } from '../../utils/motionSettings';

function Hero() {
    const USER_LOCAL_STORAGE = import.meta.env.VITE_USER_LOCAL_STORAGE
    const [isUserRegistered, setIsUserRegistered] = useState(localStorage.getItem(USER_LOCAL_STORAGE) !== null)

    return (
        <motion.section className={`${styles.outerWrapper}`}
            {...revealingMotion}
        >
            <div className={`max-w-[2000px] mx-auto`}>
                <div className='relative pt-20'>
                    <div className=' hero-background opacity-90 absolute -translate-x-1/2 -translate-y-1/2 -top-10 left-1/2 w-full h-[1500px] rounded-full filter blur-[100px]'></div>

                    <div className='relative overflow-hidden'>
                        <div className='text-center px-4'>
                            <h1 className={`${styles.heroHeading}`}>Alter, Creativity!</h1>
                            <p className='mt-4 mb-8'>Leverage AI with a suite of tools to modify
                                your desgin with a few clicks!</p>
                            {
                                isUserRegistered ?
                                    null
                                    :
                                    (
                                        <Link to={"/sign-up"} className={`${styles.primaryButton} shadow-md`}>Get Started</Link>
                                    )
                            }
                        </div>

                        <div className='relative px-4 flex justify-center'>
                            <div className='z-10 mt-20 bg-grayDark max-w-[1000px] h-full rounded-lg'>
                                <img className='rounded-lg' src={heroImage} alt="Hero Image" />
                            </div>

                            <div className='hidden md:inline-block absolute left-0 transform rotate-12 -translate-x-[20px] -translate-y-[40px] bg-grayLight w-[300px] h-[200px] rounded-lg'>
                                <img className='rounded-lg' src={purpleFlowerImage} alt="Purple Flower" />
                            </div>
                            <div className='hidden md:inline-block absolute right-0 transform -rotate-6 -translate-x-[0px] -translate-y-[40px] bg-grayLight w-[300px] h-[200px] rounded-lg'>
                                <img className='rounded-lg' src={catImage} alt="Cat Image" />
                            </div>

                            <div className='hidden md:inline-block absolute bottom-0 left-0 transform -rotate-6 -translate-x-[50px] -translate-y-[100px] bg-grayLight w-[300px] h-[200px] rounded-lg'>
                                <img className='rounded-lg' src={lamobCarImage} alt="Purple Flower" />
                            </div>
                            <div className='hidden md:inline-block absolute bottom-0 right-0 transform rotate-12 -translate-x-[0px] -translate-y-[40px] bg-grayLight w-[300px] h-[200px] rounded-lg'>
                                <img className='rounded-lg' src={moonImage} alt="Purple Flower" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Hero