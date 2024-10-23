import React from 'react';
import styles from "../../styles";
import { TbJewishStarFilled } from "react-icons/tb";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoDiamond } from "react-icons/io5";
import CreditIcon from "../../assets/icons/creditIcon.jsx";
import CustomIcon from '../../assets/icons/CustomIcon.jsx'; 

function Credit() {
  const iconSize = 28;

  return (
    <div className={styles.innerWrapper}>
      <div className="flex items-center justify-end gap-2 ">
        <CreditIcon  /> 
        <div className={`${styles.heading4}`}>236</div>
      </div>

      <div>
        <h1 className={`${styles.heading3}`}>Buy Credit</h1>
        <p className={`mt-4 ${styles.paragraph2}`}>
          Choose a credit package that suits your needs!
        </p>
      </div>

      {/* Centering the packages */}
      <div className="flex justify-center mt-28 space-x-6 flex-wrap gap-6 lg:ml-20">
        {/* Free Credit Package */}
        <div className="w-60 h-96 rounded-lg shadow-lg flex flex-col items-center py-4 bg-[#131313] space-y-10 ml-5">
          <div className="bg-primary-gradient-color p-4 rounded-full flex justify-center items-center">
            <TbJewishStarFilled size={iconSize} className="text-white" />
          </div>
          <p className={`${styles.paragraph1} ${styles.primaryText}`}>Free</p>
          <h1 className={`${styles.heading3}`}>0$</h1>
          <span className="flex space-x-2 items-center rounded-full">
            <CustomIcon /> 
            <p className={`${styles.paragraph2}`}>10 Credit</p>
          </span>
          <div className="flex-grow">
            <button type="submit" className="text-white bg-gradient-to-r from-[#333399] via-[#333399] to-[#FF00CC] rounded-full p-1 ">
              <div className="rounded-full bg-[#211f33] px-12">
                Free
              </div>
            </button>
          </div>
        </div>

        {/* Pro Credit Package */}
        <div className="w-60 h-96 rounded-lg shadow-lg flex flex-col items-center py-4 bg-[#131313] space-y-10">
          <div className="bg-primary-gradient-color p-4 rounded-full flex justify-center items-center">
            <AiFillThunderbolt size={iconSize} className="text-white" />
          </div>
          <p className={`${styles.paragraph1} ${styles.primaryText}`}>Pro</p>
          <h1 className={`${styles.heading3}`}>29$</h1>
          <span className="flex space-x-2 items-center rounded-full">
          <CustomIcon /> 
            <p className={`${styles.paragraph2}`}>120 Credit</p>
          </span>
          <div className="flex-grow">
            <button className={`${styles.primaryButton} px-12 transition-all duration-300 ease-in-out}`}>
              Buy Credit
            </button>
          </div>
        </div>

        {/* Diamond Credit Package */}
        <div className="w-60 h-96 rounded-lg shadow-lg flex flex-col items-center py-4 bg-[#131313] space-y-10">
          <div className="bg-primary-gradient-color p-4 rounded-full flex justify-center items-center">
            <IoDiamond size={iconSize} className="text-white" />
          </div>
          <p className={`${styles.paragraph1} ${styles.primaryText}`}>Premium</p>
          <h1 className={`${styles.heading3}`}>89$</h1>
          <span className="flex space-x-2 items-center rounded-full">
          <CustomIcon /> 
            <p className={`${styles.paragraph2}`}>400 Credit</p>
          </span>
          <div className="flex-grow">
            <button className={`${styles.primaryButton} px-12 transition-all duration-300 ease-in-out}`}>
              Buy Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credit;
