import React from "react";
import styles from "../styles";

function Input({ label ,id }) {
  return (
    <>
       <div className="flex flex-col gap-2">
          <label htmlFor={id} className={`${styles.paragraph3} `}>
            {label}
          </label>
          <input
            type="text"
            id={id}
            className="input input-bordered border border-grayLight
          focus-within:border-grayLight min-h-10 h-11 w-full outline-none focus:outline-none"
          />
        </div>
    </>
  );
}

export default Input;
