import React from 'react'
import styles from '../../styles'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { revealingMotion } from '../../utils/motionSettings';
import { creationsImages } from '../../assets';
import useGetAllImages from '../../hooks/image/useGetAllImages'
import useGetAllCreators from '../../hooks/image/useGetAllImages'
import ImageCard from '../../components/ImageCard'

function Gallery() {
    const { imagesData, loadingImagesData, errorImagesData } = useGetAllImages()

    return (
        <section id='gallery' className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper}`}>
                <motion.div
                    className='flex justify-center w-full mb-12'
                    {...revealingMotion}
                >
                    <h2 className={`${styles.heading1} relative mb-4`}>
                        <span className={`${styles.primaryText}`}>Platform</span> <span>Gallery</span>
                        <div className={`${styles.primaryBackground} absolute md:translate-y-2 w-full py-1 rounded-full`}></div>
                    </h2>
                </motion.div>

                <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 '>
                    {imagesData.length > 0 ? imagesData.images.map((image, index) => (
                        <ImageCard
                            key={index}
                            image={image.transformationUrl}
                            description={image.title}
                        // userImage={ image.creatorId.photo || ""}
                        // userName={image.creatorId.name || ""}
                        />
                    ))
                        :
                        null
                    }
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