import React from 'react'
import { revealingMotion, toLeftMotion, toRightMotion } from '../../utils/motionSettings'
import { motion } from "framer-motion";
import styles from '../../styles';
import { teamInfo } from '../../constants/general';
import { TbWorldWww } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { eyeImage, targetImage } from '../../assets';

function About() {
    return (
        <motion.section className={` pt-32`}
            {...revealingMotion}
        >
            <div className={`${styles.innerWrapper} max-w-[1200px] mx-auto flex flex-col gap-24`}>


                <div className='flex flex-col gap-14'>
                    <div className='flex gap-4 sm:gap-10 flex-col sm:flex-row items-center justify-center'>
                        <motion.div
                            {...toLeftMotion}
                        >
                            <img className='max-w-[120px] sm:max-w-[160px]' src={eyeImage} alt="Eye Image" />
                        </motion.div>
                        <motion.div className='sm:ml-4 flex flex-col gap-2'
                            {...toRightMotion}
                        >
                            <div className='flex flex-col sm:gap-[1px] w-fit'>
                                <h3 className={`${styles.primaryText} ${styles.heading2} sm:leading-10`}>Our Vision</h3>
                                <div className={`${styles.primaryBackground} w-full py-[1px] sm:py-[2px] rounded-full`}></div>
                            </div>
                            <p className='text-darkWhite max-w-[50ch]'>"To be the leading provider of user-friendly AI-driven image processing solutions, empowering individuals and businesses to effortlessly transform their visual content and drive innovation in every click."</p>
                        </motion.div>
                    </div>

                    <div className='flex gap-4 sm:gap-10 flex-col-reverse sm:flex-row items-center justify-center'>
                        <motion.div className='flex flex-col gap-2'
                            {...toLeftMotion}
                        >
                            <div className='flex flex-col sm:gap-[1px] w-fit'>
                                <h3 className={`${styles.primaryText} ${styles.heading2} sm:leading-10`}>Our Mission</h3>
                                <div className={`${styles.primaryBackground} w-full py-[1px] sm:py-[2px] rounded-full`}></div>
                            </div>
                            <p className='text-darkWhite max-w-[50ch]'>"Our mission is to simplify image processing with intuitive AI tools that empower users to enhance their visual content effortlessly, fostering creativity and productivity across all industries."</p>
                        </motion.div>
                        <motion.div
                            {...toRightMotion}
                        >
                            <img className='max-w-[120px] sm:max-w-[160px]' src={targetImage} alt="Target Image" />
                        </motion.div>
                    </div>
                </div>


                <div>
                    <motion.div
                        className='flex justify-center w-full mb-4 '
                        {...revealingMotion}
                    >

                        <div className='flex flex-col sm:gap-[1px] w-fit mb-6'>
                            <h3 className={`${styles.primaryText} ${styles.heading2} sm:leading-10`}>Our Team</h3>
                            <div className={`${styles.primaryBackground} w-full py-[1px] sm:py-[2px] rounded-full`}></div>
                        </div>
                    </motion.div>

                    <div className='flex flex-col justify-center gap-14'>
                        {teamInfo.map((member, index) => (
                            <div key={index} className={`flex flex-col gap-4 sm:gap-10  justify-center ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                                <motion.div
                                    className='relative w-fit h-fit flex'
                                    {...(index % 2 === 0 ? toLeftMotion : toRightMotion)}
                                >
                                    <img
                                        className='max-w-[120px] sm:max-w-[200px] max-h-[200px] rounded-full object-cover shadow-lg bg-gradient-to-r from-[#4D91FF] via-[#620A9C] to-[#FF00CC] p-1 sm:p-2 aspect-square'
                                        src={member.image}
                                        alt={`${member.name} Image`}
                                    />
                                    <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-thirdly opacity-30 w-full h-full p-2 rounded-full '></div>
                                </motion.div>
                                <motion.div
                                    className=' flex flex-col gap-2'
                                    {...(index % 2 === 0 ? toRightMotion : toLeftMotion)}
                                >
                                    <div className='flex flex-col sm:gap-[1px] w-fit'>
                                        <h3 className={`${styles.primaryText} ${styles.heading4} sm:leading-10`}>{member.name}</h3>
                                        <div className={`${styles.primaryBackground} w-full py-[1px] sm:py-[2px] rounded-full`}></div>
                                    </div>
                                    <p className='font-extralight'>{member.role}</p>
                                    <p className='text-darkWhite text-sm max-w-[50ch] mt-1'>{member.about}</p>

                                    <div className='flex gap-4 items-center mt-6'>
                                        {member.website &&
                                            <a href={member.website} target='_blank' rel='noopener noreferrer'>
                                                <TbWorldWww size={20} className={`text-darkWhite hover:text-primary fill-current ${styles.transition500}`} />
                                            </a>
                                        }
                                        {member.linkedin &&
                                            <a href={member.linkedin} target='_blank' rel='noopener noreferrer'>
                                                <FaLinkedin size={20} className={`text-darkWhite hover:text-primary fill-current ${styles.transition500}`} />
                                            </a>
                                        }
                                        {member.github &&
                                            <a href={member.github} target='_blank' rel='noopener noreferrer'>
                                                <IoLogoGithub size={20} className={`text-darkWhite hover:text-primary fill-current ${styles.transition500}`} />
                                            </a>
                                        }
                                        {member.email &&
                                            <a href={`mailto:${member.email}`} target='_blank' rel='noopener noreferrer'>
                                                <MdEmail size={20} className={`text-darkWhite hover:text-primary fill-current ${styles.transition500}`} />
                                            </a>
                                        }
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </motion.section>
    )
}

export default About