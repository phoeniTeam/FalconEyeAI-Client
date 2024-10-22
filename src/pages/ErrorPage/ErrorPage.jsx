import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <main className={`w-screen h-screen flex flex-col justify-center items-center relative ${styles.primaryBackground}`}>
      {/* Background Layer */}
      <div className="opacity-90 absolute -translate-x-1/2 -translate-y-1/2 -top-10 left-1/2 w-full h-[1500px] rounded-full filter blur-[100px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <div className={`${styles.wrapper} text-center relative z-10`}>
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
