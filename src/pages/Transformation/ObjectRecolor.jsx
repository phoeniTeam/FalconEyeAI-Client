import React, { useState } from 'react'
import styles from '../../styles';
import CreditIcon from "../../assets/icons/creditIcon"; 
import Input from '../../components/input';
import { FaSquarePlus } from "react-icons/fa6";

function ObjectRecolor() {
    const [inputValue, setInputValue] =useState('');
    const isButtonActive = inputValue.trim() !== '';
  return (
    <div className="py-0 px-3 w-full flex flex-col justify-between gap-8 ">
      <div className="grid grid-cols-1 gap-10 p-8 w-full">
      <div className="flex justify-between ">
      <div className="flex flex-col items-start gap-4">
                    <h1 className={`${styles.heading3} text-white `}>
                    Object Recolor        
                                </h1>
                    <div className={`${styles.paragraph2} text-white `}>
                    Identify and recolor objects from image


                    </div>
                    <div className="flex items-center justify-start gap-4">
                           
                               <CreditIcon />
                        <div className={`${styles.paragraph2} text-white `}>
                            12
                        </div>
                    </div>
                </div>
                <div className="flex  gap-2">
                    <CreditIcon />

                        <div className={`${styles.heading4} text-white `}>
                            236
                        </div>
                        
                    </div>
</div>
<Input label="Image Title" id="imageTitle" />
<div className='grid grid-cols-2 justify-items-center gap-6   '>
  <div className='w-full '>
  <Input label="Object to Recolor" id="ObjectToRecolor"/>

  </div>
  <div className='w-full'>

<Input 
label="Replacement Color" 
id="Replacement Color"
value={inputValue}
onChange={(e) => setInputValue(e.target.value)}
/>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-20 lg:justify-items-center md:justify-items-center sm:justify-items-center max-sm:justify-center max-md:gap-4  ">
<div>
                        <h4 className={`${styles.heading4}`}>Original</h4>
                        <div className="flex items-center justify-center border-2 border-[#38383E] p-10 w-96 min-h-72 max-h-96 rounded-lg cursor-pointer flex-grow max-sm:w-80 ">
                            <div className="flex flex-col items-center gap-1">
                            <FaSquarePlus className='h-8 w-8 text-[#333399] hover:text-[#FF00CC]'/>

                                <span className="text-[#E8E6E3]">
                                    Click here to upload
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className={`${styles.heading4}`}>Transformed</h4>
                        <div className="flex items-center justify-center border-2 border-[#38383E] p-10 w-96 min-h-72 max-h-96 rounded-lg cursor-pointer flex-grow max-sm:w-80 ">
                            <div className="flex flex-col items-center">
                                <div className="text-[#E8E6E3]">
                                    Transformed Image
                                </div>
                            </div>
                        </div>
                    </div>
</div>
<div className=" grid grid-cols-1 justify-center w-full p-2 gap-4 ">
                    <button
                        className={`${styles.primaryBackground} rounded-full min-h-9 h-9 border-none ${isButtonActive? styles.buttonActive : 'opacity-50 cursor-not-allowed'} `}
                        disabled={!isButtonActive}
                    >
                        Apply Transformation
                    </button>
                    <button
                        className={`${styles.primaryBackground} rounded-full min-h-9 h-9 border-none `}
                    >
                        Save image
                    </button>
                </div>
      </div>
      
    </div>
  )
}

export default ObjectRecolor