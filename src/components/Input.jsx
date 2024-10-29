import React from 'react';
import styles from '../styles';
import { FiRefreshCcw } from 'react-icons/fi';

function Input({
    label,
    id,
    value,
    onChange,
    onReset,
    canReset,
    isProcessing,
    width = 'full',
    height = '11',
}) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full">
                    <label htmlFor={id} className={`${styles.paragraph3} text-darkWhite`}>
                        {label}
                    </label>
                    {canReset && !isProcessing && (
                        <div
                            onClick={onReset}
                            className={`btn btn-circle border-none bg-[#131313] hover:bg-grayDark group min-h-10 h-10 w-10 ${styles.transition500}`}
                        >
                            <FiRefreshCcw
                                className={`w-4 h-4 lg:w-5 lg:h-5 text-grayLight group-hover:text-darkWhite cursor-pointer ${styles.transition500}`}
                            />
                        </div>
                    )}
                </div>
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
