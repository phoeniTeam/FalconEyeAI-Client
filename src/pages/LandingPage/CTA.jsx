import React from 'react'
import styles from '../../styles'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { revealingMotion } from '../../utils/motionSettings';
import { heroImage, logoSideLight } from '../../assets';

function CTA() {
    return (
        <motion.section id='cta' className={` bg-grayDark`}
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
                        <Link to={"/home"} className={`${styles.primaryButton} w-fit`} >Lunch App Now</Link>
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