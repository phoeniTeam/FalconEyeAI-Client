import React, { useEffect, useState } from 'react'
import styles from '../styles'
import { logoLight, logoSide, logoSideLight } from '../assets'
import { Link } from 'react-router-dom'
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { navbarLinks } from '../constants/navbarConstants';

function Navbar() {
  const [toggleMobileNav, setToggleMobileNav] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`
      ${isScrolled ? "bg-grayDark" : ""}
    ${toggleMobileNav ? "bg-grayDark sm:bg-transparent" : ""} 
    ${styles.transition500} fixed z-50 w-full`}>
      <div className={`${styles.wrapper} py-2 flex justify-between items-center`}>
        <Link to="/" className='h-14'>
          <img className='h-full' src={`${isScrolled ? logoSide : logoSideLight}`} alt="Logo" />
        </Link>

        <div className='hidden sm:flex items-center gap-14'>
          <div className='flex items-center gap-4'>
            {navbarLinks.map((link, index) => (
              <a key={index} className={`${styles.primaryTextOnHover}`} href={`#${link.id}`}>{link.title}</a>
            ))}
          </div>

          <button className={`${styles.primaryButton}`}>Launch App</button>
        </div>

        <SlMenu
          onClick={() => setToggleMobileNav(true)}
          className={`${styles.transition500} sm:hidden cursor-pointer`} size={24} />
      </div>

      <div
        className={`fixed top-0 right-0 h-screen bg-grayDark p-6 px-4 transition-transform duration-300 ease-in-out transform ${toggleMobileNav ? 'translate-x-0' : 'translate-x-full'} sm:hidden flex flex-col items-end gap-14`}>

        <IoClose
          onClick={() => setToggleMobileNav(false)}
          className={`${styles.transition500} cursor-pointer`} size={24} />

        <div className='flex flex-col items-center justify-center w-full gap-4'>
          {navbarLinks.map((link, index) => (
            <a key={index} className={`${styles.primaryTextOnHover}`} href={`#${link.id}`}>{link.title}</a>
          ))}
        </div>

        <button className={`${styles.primaryButton}`}>Launch App</button>
      </div>
    </div >
  )
}

export default Navbar;