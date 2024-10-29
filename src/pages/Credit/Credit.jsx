import React, { useState, useEffect } from 'react';
import styles from "../../styles";
import TbJewishStarFilled from '../../assets/icons/TbJewishStarFilled.jsx';
import AiFillThunderbolt from '../../assets/icons/AiFillThunderbolt.jsx';
import IoDiamond from '../../assets/icons/IoDiamond.jsx';
import CreditIcon from "../../assets/icons/creditIcon.jsx";
import CustomIcon from '../../assets/icons/CustomIcon.jsx';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { getCreatorLocalStorage } from '../../utils/getCreatorLocalStorage'
import { getUserInfo } from '../../utils/getUserInfo';

function Credit() {
  const [creditBalance, setCreditBalance] = useState(0);


  const makePayment = async (plan) => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
    const plansPrices = {
      1: 0,
      2: 29,
      3: 89,
    }
    const body = {
      plan,
      creatorId: getCreatorLocalStorage().creatorId
    };

    try {
      const response = await axios.post(import.meta.env.VITE_CREATE_CHECKOUT_SESSION_API, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const session = response.data;
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      console.log(result)
      if (result.error) {
      
        console.error("Error redirecting to checkout:", result.error);
      }
    } catch (error) {

      console.error("Error making payment:", error.response || error.message);
    }
  };

  const fetchUserCredit = async () => {
    try {
      const { creditBalance: localCreditBalance } = getUserInfo();
      setCreditBalance(localCreditBalance);
    } catch (err) {
      console.error('Failed to fetch user credit:', err);
    }
  };

  useEffect(() => {
    fetchUserCredit();
  }, []);

  return (
    <div className={styles.innerWrapper}>
   
      
      <div className="flex justify-between items-center">
        <div className="text-left">
          <h1 className={`${styles.heading3}`}>Buy Credit</h1>
          <p className={`mt-2 ${styles.paragraph2}`}>
            Choose a credit package that suits your needs!
          </p>
        </div>
        <div className="flex items-center gap-2 mb-12">
          <CreditIcon />
          <div className={`${styles.heading4}`}>{creditBalance}</div>
        </div>
      </div>

      <div className="flex justify-center mt-28 space-x-6 flex-wrap gap-6 lg:ml-20">
        {/* Free Credit Package */}
        <div className="w-60 h-96 rounded-lg shadow-lg flex flex-col items-center py-4 bg-[#131313] space-y-10 ml-5">
          <div className="bg-primary-gradient-color p-4 rounded-full flex justify-center items-center">
            <TbJewishStarFilled  className="text-white" />
          </div>
          <p className={`${styles.paragraph1} ${styles.primaryText}`}>Free</p>
          <h1 className={`${styles.heading3}`}>0$</h1>
          <span className="flex space-x-2 items-center rounded-full">
            <CustomIcon />
            <p className={`${styles.paragraph4} text-gray-500`}>10 Credit</p>
          </span>
          <div className="flex-grow">
            <button type="submit" className={styles.newGradientButton}>
              <div className={styles.newInnerButton}>Free</div>
            </button>
          </div>
        </div>

        {/* Pro Credit Package */}
        <div className="w-60 h-96 rounded-lg shadow-lg flex flex-col items-center py-4 bg-[#131313] space-y-10">
          <div className="bg-primary-gradient-color p-4 rounded-full flex justify-center items-center">
            <AiFillThunderbolt  className="text-white" />
          </div>
          <p className={`${styles.paragraph1} ${styles.primaryText}`}>Pro</p>
          <h1 className={`${styles.heading3}`}>29$</h1>
          <span className="flex space-x-2 items-center rounded-full">
            <CustomIcon />
            <p className={`${styles.paragraph4} text-gray-500`}>220 Credit</p>
          </span>
          <div className="flex-grow">
            <button
              onClick={() => makePayment(2)}
              className={`${styles.primaryButton} px-8 transition-all duration-300 ease-in-out`}>
              Buy Credit
            </button>
          </div>
        </div>

        {/* Diamond Credit Package */}
        <div className="w-60 h-96 rounded-lg shadow-lg flex flex-col items-center py-4 bg-[#131313] space-y-10">
          <div className="bg-primary-gradient-color p-4 rounded-full flex justify-center items-center">
            <IoDiamond className="text-white" />
          </div>
          <p className={`${styles.paragraph1} ${styles.primaryText}`}>Premium</p>
          <h1 className={`${styles.heading3}`}>79$</h1>
          <span className="flex space-x-2 items-center rounded-full">
            <CustomIcon />
            <p className={`${styles.paragraph4} text-gray-500`}>500 Credit</p>
          </span>
          <div className="flex-grow">
            <button
              onClick={() => makePayment(3)}
              className={`${styles.primaryButton} px-8 transition-all duration-300 ease-in-out`}>
              Buy Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
