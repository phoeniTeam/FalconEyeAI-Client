import React from 'react'
import styles from '../../styles'
import { features } from '../../constants/landingPageConstants'
import { motion } from "framer-motion";
import { revealingMotion, toBottomLeftMotion, toBottomRightMotion, toLeftMotion, toRightMotion, toTopLeftMotion, toTopMotion, toTopRightMotion } from '../../utils/motionSettings'
function Features() {
    return (
        <section id='features' className={`${styles.outerWrapper} overflow-hidden`}>
            <div className={`${styles.wrapper}`}>
                <motion.div
                    className='flex justify-center w-full mb-10'
                    {...revealingMotion}
                >
                    <h2 className={`${styles.heading1} relative`}>
                        <span className={`${styles.primaryText}`}>FalconEyeAI</span> <span>Features</span>
                        <div className={`${styles.primaryBackground} absolute md:translate-y-2 w-full py-1 rounded-full`}></div>
                    </h2>
                </motion.div>

                <div className='flex flex-col gap-28'>
                    {features.map((feature, index) => (
                        <div key={index} className={`flex flex-col gap-4 justify-between ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                            <motion.div
                                className='sm:w-1/2 flex justify-center items-center'
                                // {...revealingMotion}
                                {...(index % 2 === 0 ? toLeftMotion : toRightMotion)}
                            >
                                <img className='rounded-lg' src={feature.image} alt={`${feature.title} Image`} />
                            </motion.div>
                            <motion.div
                                className='sm:w-1/2 flex flex-col gap-4'
                                // {...revealingMotion}
                                {...(index % 2 === 0 ? toRightMotion : toLeftMotion)}
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