import React from 'react'
import styles from '../../styles'
import { catImage, purpleFlowerImage } from '../../assets'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className={`${styles.outerWrapper}`}>
            <div className={`max-w-[2000px] mx-auto`}>
                <div className='relative pt-20'>
                    <div className=' hero-background opacity-90 absolute -translate-x-1/2 -translate-y-1/2 -top-10 left-1/2 w-full h-[1500px] rounded-full filter blur-[100px]'></div>

                    <div className='relative overflow-hidden'>
                        <div className='text-center px-4'>
                            <h1 className={`${styles.heroHeading}`}>Alter, Creativity!</h1>
                            <p className='mt-4 mb-8'>Leverage AI with a suite of tools to modify
                                your desgin with a few clicks!</p>
                            <Link to={"/home"} className={`${styles.primaryButton} shadow-md`}>Lunch App</Link>
                        </div>

                        <div className='relative px-4 flex justify-center'>
                            <div className='z-10 mt-20 bg-grayDark w-[100%] sm:w-[60%] h-[700px] rounded-lg'></div>

                            <div className='hidden md:inline-block absolute left-0 transform rotate-12 -translate-x-[20px] -translate-y-[40px] bg-grayLight w-[300px] h-[200px] rounded-lg'>
                                <img className='rounded-lg' src={purpleFlowerImage} alt="Purple Flower" />
                            </div>
                            <div className='hidden md:inline-block absolute right-0 transform -rotate-6 -translate-x-[0px] -translate-y-[40px] bg-grayLight w-[300px] h-[200px] rounded-lg'>
                                <img className='rounded-lg' src={catImage} alt="Cat Image" />
                            </div>

                            <div className='hidden md:inline-block absolute bottom-0 left-0 transform -rotate-6 -translate-x-[50px] -translate-y-[100px] bg-grayLight w-[300px] h-[200px] rounded-lg'>
                            </div>
                            <div className='hidden md:inline-block absolute bottom-0 right-0 transform rotate-12 -translate-x-[0px] -translate-y-[40px] bg-grayLight w-[300px] h-[200px] rounded-lg'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero