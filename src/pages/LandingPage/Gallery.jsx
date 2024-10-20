import React from 'react'
import styles from '../../styles'
import { Link } from 'react-router-dom'

function Gallery() {
    return (
        <section id='gallery' className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper}`}>
                <div className='flex justify-center w-full mb-10'>
                    <h2 className={`${styles.heading1} relative`}>
                        <span className={`${styles.primaryText}`}>Platform</span> <span>Gallery</span>
                        <div className={`${styles.primaryBackground} absolute md:translate-y-2 w-full py-1 rounded-full`}></div>
                    </h2>
                </div>



                <div className='flex justify-center'>
                    <Link to={"/home"} className={`${styles.primaryButton} `} >Explore More</Link>
                </div>
            </div>
        </section>
    )
}

export default Gallery