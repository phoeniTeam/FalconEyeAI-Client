import React from 'react'
import styles from '../../styles'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { revealingMotion } from '../../utils/motionSettings';

function CTA() {
    return (
        <motion.section id='cta' className={`${styles.outerWrapper}`}
            {...revealingMotion}
        >
            <div className={`${styles.wrapper} bg-grayDark px-10 py-12 rounded-lg `}>
                <div className='flex  justify-between'>
                    <div className={`${styles.heading2}`}>
                        <p>Modify Your Creativity</p>
                        <p>With <span className={`${styles.primaryText}`}>FalconEye</span></p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <Link to={"/home"} className={`${styles.primaryButton} `} >Lunch App</Link>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}

export default CTA