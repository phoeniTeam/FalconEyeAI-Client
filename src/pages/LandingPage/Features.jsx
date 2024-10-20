import React from 'react'
import styles from '../../styles'
import { features } from '../../constants/landingPageConstants'
import { motion } from "framer-motion";
import { toLeftMotion, toRightMotion } from '../../utils/motionSettings'
function Features() {
    return (
        <section id='features' className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper}`}>
                <div className='flex flex-col gap-1 w-fit mb-10'>
                    <h2 className={`${styles.heading1}`}><span className={`${styles.primaryText}`}>FalconEyeAI</span> <span>Features</span></h2>
                    <div className={`${styles.primaryBackground} w-full py-1 rounded-full`}></div>
                </div>

                <div className='flex flex-col gap-28'>
                    {features.map((feature, index) => (
                        <div key={index} className={`flex flex-col gap-4 justify-between ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                            <motion.div
                                className='sm:w-1/2'
                                {...(index % 2 === 0 ? toLeftMotion : toRightMotion)}
                            >
                                <img src="" alt={`${feature.title} Image`} />
                            </motion.div>
                            <motion.div
                                className='sm:w-1/2 flex flex-col gap-4'
                                {...(index % 2 !== 0 ? toRightMotion : toLeftMotion)}
                            >
                                <div className='flex flex-col gap-[1px] w-fit'>
                                    <h3 className={`${styles.primaryText} ${styles.heading3} leading-10`}>{feature.title}</h3>
                                    <div className={`${styles.primaryBackground} w-full py-[2px] rounded-full`}></div>
                                </div>
                                <p>{feature.description}</p>
                            </motion.div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Features