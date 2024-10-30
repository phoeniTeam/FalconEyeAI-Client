import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../styles";
import StarIcon from '../../assets/icons/StarIcon.jsx';
import AiFillThunderbolt from '../../assets/icons/AiFillThunderbolt.jsx';
import IoDiamond from '../../assets/icons/IoDiamond.jsx';
import CreditIcon from "../../assets/icons/creditIcon.jsx";
import CustomIcon from '../../assets/icons/CustomIcon.jsx';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { getCreatorLocalStorage } from '../../utils/getCreatorLocalStorage';
import { getUserInfo } from '../../utils/getUserInfo';

function Credit() {
  const navigate = useNavigate();
  const [creditBalance, setCreditBalance] = useState(0);

  const packages = [
    {
      id: '1',
      name: 'Free',
      price: '0',
      credit: '10',
      icon: <StarIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />,
    },
    {
      id: '2',
      name: 'Pro',
      price: '29',
      credit: '220',
      icon: <AiFillThunderbolt className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
    },
    {
      id: '3',
      name: 'Premium',
      price: '89',
      credit: '500',
      icon: <IoDiamond className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
    }
  ]

  const makePayment = async (plan) => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
    const plansPrices = {
      1: 0,
      2: 29,
      3: 89,
    };
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

      console.log(result);
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
    const userData = getCreatorLocalStorage();
    if (!userData) {
      navigate("/sign-in");
    } else {
      fetchUserCredit();
    }
  }, [navigate]);

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

      <div className='w-full'>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-y-6 gap-x-2 mt-10 '>
          {packages.map((packageItem, index) => (
            <div
              key={index}
              className={`max-w-[250px] p-[38px] flex flex-col gap-10 bg-grayDark rounded-lg shadow-lg transform hover:scale-105 ${styles.transition500}`}
            >
              <div className='flex relative justify-center '>
                <div className='shadow-md w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full'></div>
                {packageItem.icon}
              </div>
              <div className='text-center'>
                <h2 className={`${styles.heading4} ${styles.primaryText}`}>{packageItem.name}</h2>
              </div>

              <div className={`text-center`}>
                <p className={`${styles.heading3}`}>{packageItem.price}$</p>
              </div>

              <div className="flex justify-center items-center gap-1">
                <CustomIcon />
                <p className='text-darkWhite text-sm'>{packageItem.credit} credit</p>
              </div>

              <div className='flex justify-center'>
                {
                  packageItem.name === 'Free' ? (
                    <button type="submit" className={styles.newGradientButton}>
                      <div className={styles.newInnerButton}>Free</div>
                    </button>
                  )
                    : (
                      <button
                        onClick={() => makePayment(packageItem.id)}
                        className={`${styles.primaryButton}  ${styles.transition500}`}>
                        Buy Credit
                      </button>
                    )
                }
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Credit;
