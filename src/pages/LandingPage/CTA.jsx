import React from 'react'
import styles from '../../styles'
import { Link } from 'react-router-dom'

function CTA() {
    return (
        <section id='cta' className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper} bg-grayDark p-6 py-12 rounded-lg `}>
                <div className='flex  justify-between'>
                    <div className={`${styles.heading2}`}>
                        <p>Modify Your Creativity</p>
                        <p>With <span className={`${styles.primaryText}`}>FalconEye</span></p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <Link to={"/home"} className={`${styles.primaryButton} `} >Explore More</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CTA