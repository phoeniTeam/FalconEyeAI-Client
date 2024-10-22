import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <main className={`relative w-screen h-screen flex flex-col justify-center items-center `}>
      <div className='hero-background opacity-90 absolute -translate-x-1/2 -translate-y-1/2 -top-0 left-1/2 w-full h-[1500px] rounded-full filter blur-[100px]'></div>

      <div className={`${styles.wrapper} z-10 text-center`}>
        <h1 className={`${styles.heroHeading} text-white animate-bounce`}>
          404
        </h1>
        <h2 className={`${styles.heading2} text-white mt-4`}>
          Page Not Found
        </h2>
        <p className={`${styles.paragraph1} text-gray-200 mt-4 mb-8`}>
          Oops! It looks like the page you're looking for doesn't exist. Don't worry, we can guide you back to safety.
        </p>
        <button
          onClick={handleGoHome}
          className={`${styles.primaryButton} ${styles.transition500} text-white`}
        >
          Go Back Home
        </button>
      </div>
    </main>
  );
}
