import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles';
import { logoLight, logoSide, logoSideLight } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { navbarLinks } from '../constants/general';
import { motion } from "framer-motion";
import { revealingMotion } from '../utils/motionSettings';

function Navbar() {
  const location = useLocation();
  console.log(location.pathname)
  const USER_LOCAL_STORAGE = import.meta.env.VITE_USER_LOCAL_STORAGE
  const [isUserRegistered, setIsUserRegistered] = useState(localStorage.getItem(USER_LOCAL_STORAGE) !== null)

  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNavRef = useRef(null);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 70);
  };

  const handleClickOutside = (event) => {
    if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
      setToggleMobileNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setToggleMobileNav(false);
  };

  return (
    <motion.div className={`
      ${isScrolled ? "bg-base100 shadow-lg" : ""}
      ${toggleMobileNav ? "bg-base100 sm:bg-transparent" : ""} 
      ${styles.transition500} fixed z-50 py-2 w-full`}
      {...revealingMotion}
    >
      <div className={`${styles.wrapper} py-2 flex justify-between items-center`}>
        <Link to="/" className='h-14'>
          <img className='h-full' src={`${isScrolled ? logoSide : logoSideLight}`} alt="Logo" />
        </Link>

        <div className='hidden sm:flex items-center gap-10'>
          <div className='flex items-center gap-4'>
            {navbarLinks.map((link, index) => (
              <div key={index} className={`${location.pathname.slice(1) == link.id ? "text-primary" : ""} relative group hover:text-primary ${styles.transition500}`}>
                <Link to={link.link}>{link.title}</Link>
                <div className={`bg-primary h-[2.2px] w-1 invisible group-hover:visible group-hover:w-full absolute bottom-0 rounded-full ${styles.transition500}`}></div>
              </div>
            ))}
          </div>
          {
            isUserRegistered ?
              (
                <Link to={"/home"} className={`${styles.primaryButton} shadow-md`} onClick={handleLinkClick}>Lunch App</Link>
              )
              :
              (
                <Link to={"/sign-up"} className={`${styles.primaryButton} shadow-md`} onClick={handleLinkClick}>Get Started</Link>
              )
          }
        </div>

        <SlMenu
          onClick={() => setToggleMobileNav(true)}
          className={`${styles.transition500} sm:hidden cursor-pointer`} size={24} />
      </div>

      <div
        ref={mobileNavRef}
        className={`fixed top-0 right-0 h-screen bg-base100 p-6 px-4 transition-transform duration-300 ease-in-out transform ${toggleMobileNav ? 'translate-x-0' : 'translate-x-full'} sm:hidden flex flex-col items-end gap-14`}>

        <IoClose
          onClick={() => setToggleMobileNav(false)}
          className={`${styles.transition500} cursor-pointer`} size={24} />

        <div className='flex flex-col items-center justify-center w-full gap-4'>
          {navbarLinks.map((link, index) => (
            <div key={index} className={`relative group hover:text-primary ${styles.transition500}`}>
              <Link to={link.link}
                onClick={handleLinkClick}
              >{link.title}</Link>
              <div className={`bg-primary h-[2.2px] w-1 invisible group-hover:visible group-hover:w-full absolute bottom-0 rounded-full ${styles.transition500}`}></div>
            </div>
          ))}
        </div>
        {
          isUserRegistered ?
            (
              <Link to={"/home"} className={`${styles.primaryButton} shadow-md`} onClick={handleLinkClick}>Lunch App</Link>
            )
            :
            (
              <Link to={"/sign-up"} className={`${styles.primaryButton} shadow-md`} onClick={handleLinkClick}>Get Started</Link>
            )
        }
      </div>
    </motion.div>
  );
}

export default Navbar;