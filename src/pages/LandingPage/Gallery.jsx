import React from 'react'
import styles from '../../styles'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { revealingMotion } from '../../utils/motionSettings';

function Gallery() {
    return (
        <section id='gallery' className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper}`}>
                <motion.div
                    className='flex justify-center w-full mb-10'
                    {...revealingMotion}
                >
                    <h2 className={`${styles.heading1} relative`}>
                        <span className={`${styles.primaryText}`}>Platform</span> <span>Gallery</span>
                        <div className={`${styles.primaryBackground} absolute md:translate-y-2 w-full py-1 rounded-full`}></div>
                    </h2>
                </motion.div>



                <motion.div
                    className='flex justify-center'
                    {...revealingMotion}
                >
                    <Link to={"/home"} className={`${styles.primaryButton} `} >Explore More</Link>
                </motion.div>
            </div>
        </section>
    )
}

export default Gallery