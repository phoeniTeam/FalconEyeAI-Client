import React from 'react';
import styles from '../styles';

function Input({ label, id, value, onChange, width = 'full', height = '11' }) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <label htmlFor={id} className={`${styles.paragraph3} text-darkWhite`}>
                    {label}
                </label>
                <input
                    type="text"
                    id={id}
                    value={value}
                    onChange={onChange}
                    className={`input input-bordered border border-grayLight 
                      focus-within:border-grayLight min-h-10 h-${height} w-${width} outline-none focus:outline-none`}
                />
            </div>
        </>
    );
}

export default Input;
