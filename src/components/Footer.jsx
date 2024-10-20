import React from 'react'
import styles from '../styles'
import { logoSide, logoTitle } from '../assets'
import { Link } from 'react-router-dom'
import { navbarLinks } from '../constants/navbarConstants'
import { motion } from "framer-motion";
import { toTopMotion } from '../utils/motionSettings';

function Footer() {
  return (
    <motion.section id='community' className={`${styles.footerOuterWrapper}`}
      {...toTopMotion}
    >
      <div className={`${styles.wrapper}`}>
        <div className='bg-grayDark w-full py-[3px] rounded-full'></div>

        <div className='flex justify-between gap-1 mt-8 mb-4'>
          <Link to={"/"} className="h-20">
            <img className='h-full' src={logoTitle} alt="Logo" />
          </Link>

          <div className='flex flex-col sm:flex-row items-center gap-y-2 gap-x-4'>
            {navbarLinks.map((link, index) => (
              <a key={index} className={`${styles.primaryTextOnHover}`} href={`#${link.id}`}>{link.title}</a>
            ))}
          </div>
        </div>

        <p className='text-grayLight text-xs'>© Copyright FalconEye AI</p>
      </div>
    </motion.section>
  )
}

export default Footer