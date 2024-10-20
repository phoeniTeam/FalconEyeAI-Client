import { communityReviews } from '../../constants/landingPageConstants'
import styles from '../../styles'
import { motion } from "framer-motion";
import { revealingMotion } from '../../utils/motionSettings';

function Community() {
    return (
        <section id='reviews' className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper}`}>
                <motion.div
                    className='flex justify-center w-full'
                    {...revealingMotion}
                >
                    <h2 className={`${styles.heading1} relative`}>
                        <span className={`${styles.primaryText}`}>Community</span> <span>of Creators</span>
                        <div className={`${styles.primaryBackground} absolute md:translate-y-2 w-full py-1 rounded-full`}></div>
                    </h2>
                </motion.div>

                <motion.div
                    className='flex justify-center mt-14 mb-24'
                    {...revealingMotion}
                >
                    <p className='text-center text-darkWhite max-w-[60ch]'>FalconEye AI is more than just an innovative tool for background removal, image
                        restoration, object editing, and Generative Fill—it's part of a vibrant community
                        dedicated to empowering users like you.</p>
                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {communityReviews.map((review, index) => (
                        <motion.div key={index} className='flex flex-col gap-4'
                            {...revealingMotion}
                        >
                            <p className='text-center'>{review.comment}</p>
                            <div className='flex justify-center items-center gap-2'>
                                <div className='w-[50px]'>
                                    <img
                                        className='rounded-full'
                                        src={review.userPhoto} alt={`${review.username} Photo`} />
                                </div>
                                <p className='text-darkWhite'>{review.username}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Community