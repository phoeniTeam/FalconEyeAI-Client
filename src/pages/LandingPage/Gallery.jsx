import React from 'react'
import styles from '../../styles'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { revealingMotion } from '../../utils/motionSettings';
import { creationsImages } from '../../assets';

function Gallery() {
    return (
        <section id='gallery' className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper}`}>
                <motion.div
                    className='flex justify-center w-full mb-16'
                    {...revealingMotion}
                >
                    <h2 className={`${styles.heading1} relative mb-4`}>
                        <span className={`${styles.primaryText}`}>Platform</span> <span>Gallery</span>
                        <div className={`${styles.primaryBackground} absolute md:translate-y-2 w-full py-1 rounded-full`}></div>
                    </h2>
                </motion.div>

                <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 '>
                    {creationsImages.map((creation, index) => (
                        <motion.div key={index} className='mb-4 break-inside-avoid cursor-pointer'>
                            <img className={`${styles.transition500} rounded-xl opacity-80 hover:opacity-100`} src={creation} alt="Photo" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className='mt-10 flex justify-center'
                    {...revealingMotion}
                >
                    <Link to={"/home"} className={`${styles.primaryButton}`} >Explore More</Link>
                </motion.div>
            </div>
        </section>
    )
}

export default Gallery