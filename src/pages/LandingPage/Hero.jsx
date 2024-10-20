import React from 'react'
import styles from '../../styles'
import { catImage, purpleFlowerImage } from '../../assets'
function Hero() {
    return (
        <div className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper}`}>
                <div className='relative pt-20'>
                    <div className=' hero-background opacity-90 absolute -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 w-[1400px] h-[1200px] rounded-full filter blur-lg'></div>

                    <div className='relative'>
                        <div className='text-center'>
                            <h1 className={`${styles.heroHeading}`}>Alter, Creativity!</h1>
                            <p className='mt-4 mb-8'>Leverage AI with a suite of tools to modify
                                your desgin with a few clicks!</p>
                            <button className={`${styles.primaryButton} shadow-md`}>Lunch App</button>
                        </div>

                        <div className='relative flex justify-center'>
                            <div className='z-10 mt-20 bg-grayDark w-[100%] sm:w-[60%] h-[700px] rounded-lg'></div>

                            <div className='hidden sm:inline-block absolute left-0 transform rotate-12 -translate-x-[20px] -translate-y-[70px] bg-grayLight w-[300px] h-[200px] rounded-lg'>
                                <img className='rounded-lg' src={purpleFlowerImage} alt="Purple Flower" />
                            </div>
                            <div className='hidden sm:inline-block absolute right-0 transform -rotate-6 -translate-x-[20px] -translate-y-[70px] bg-grayLight w-[300px] h-[200px] rounded-lg'>
                                <img className='rounded-lg' src={catImage} alt="Cat Image" />
                            </div>

                            <div className='hidden sm:inline-block absolute bottom-0 left-0 transform -rotate-6 -translate-x-[50px] -translate-y-[70px] bg-grayLight w-[300px] h-[200px] rounded-lg'>
                            </div>
                            <div className='hidden sm:inline-block absolute bottom-0 right-0 transform rotate-12 -translate-x-[0px] -translate-y-[70px] bg-grayLight w-[300px] h-[200px] rounded-lg'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero