import React from 'react'
import styles from '../styles'
import { logoSide, logoTitle } from '../assets'
import { Link } from 'react-router-dom'
import { navbarLinks } from '../constants/general'
import { motion } from "framer-motion";
import { toTopMotion } from '../utils/motionSettings';
import { FaDiscord } from 'react-icons/fa'
import { socials } from '../constants/general'

function Footer() {
  return (
    <motion.section id='community' className={`${styles.footerOuterWrapper}`}
      {...toTopMotion}
    >
      <div className={`${styles.wrapper}`}>
        <div className='bg-grayDark w-full py-[1px] rounded-full'></div>

        <div className='flex justify-between gap-1 mt-8 mb-4'>
          <Link to={"/"} className="h-20">
            <img className='h-full' src={logoTitle} alt="Logo" />
          </Link>


          <div className='flex items-center gap-6'>
            <div className='flex flex-col sm:flex-row items-center gap-y-2 gap-x-4'>
              {socials.map(social => (
                <div key={social.id} className={`relative group hover:text-primary ${styles.transition500}`}>
                  <a href={social.link}>{social.title}</a>
                  <div className={`bg-primary h-[2.2px] w-1 invisible group-hover:visible group-hover:w-full absolute bottom-0 rounded-full ${styles.transition500}`}></div>
                </div>
              ))}
            </div>
            <div className='text-grayLight hidden sm:inline-block'>
              |
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-y-2 gap-x-4'>
              {navbarLinks.map((link, index) => (
                <div key={index} className={`relative group hover:text-primary ${styles.transition500}`}>
                  <a href={`#${link.id}`}>{link.title}</a>
                  <div className={`bg-primary h-[2.2px] w-1 invisible group-hover:visible group-hover:w-full absolute bottom-0 rounded-full ${styles.transition500}`}></div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <p className='text-grayLight text-xs'>© Copyright FalconEye AI</p>
      </div>
    </motion.section>
  )
}

export default Footer