import React from 'react'
import styles from '../../styles';
import CreditIcon from "../../assets/icons/creditIcon"; 
import Input from '../../components/input';

function ObjectRecolor() {
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

<Input label="Replacement Color" id="Replacement Color"/>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-20 lg:justify-items-center md:justify-items-center sm:justify-items-center max-sm:justify-center max-md:gap-4  ">
<div>
                        <h4 className={`${styles.heading4}`}>Original</h4>
                        <div className="flex items-center justify-center border-2 border-[#38383E] p-10 w-96 min-h-72 max-h-96 rounded-lg cursor-pointer flex-grow max-sm:w-80 ">
                            <div className="flex flex-col items-center gap-1">
                                <svg
                                    width="24"
                                    height="24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.46738 0H22.5326C22.9361 0 23.3029 0.165039 23.5689 0.431055C23.835 0.69707 24 1.06387 24 1.46738V22.5326C24 22.9361 23.8348 23.3029 23.5689 23.5689C23.3031 23.835 22.9363 24 22.5326 24H1.46738C1.06387 24 0.696875 23.835 0.431055 23.5689C0.165039 23.3031 0 22.9363 0 22.5326V1.46738C0 1.06387 0.165039 0.696875 0.431055 0.431055C0.69707 0.165234 1.06387 0 1.46738 0ZM5.20059 12.4986C5.32812 12.6262 5.50449 12.7053 5.69922 12.7053H11.2686H11.2947V12.7314V18.3008C11.2947 18.4955 11.3736 18.6719 11.5014 18.7996C11.6291 18.9273 11.8053 19.0062 12 19.0062C12.1947 19.0062 12.3711 18.9273 12.4988 18.7996C12.6266 18.6719 12.7053 18.4955 12.7053 18.3008V12.7314V12.7053H12.7314H18.301C18.4957 12.7053 18.6721 12.6264 18.7998 12.4986C18.9275 12.3709 19.0064 12.1945 19.0064 11.9998C19.0064 11.8053 18.9275 11.6289 18.7998 11.5012C18.6721 11.3734 18.4957 11.2947 18.301 11.2947H12.7312H12.7051V11.2686V5.69922C12.7051 5.50449 12.6264 5.32812 12.4986 5.20059C12.3709 5.07305 12.1945 4.99395 11.9998 4.99395C11.8051 4.99395 11.6289 5.07285 11.5012 5.20059C11.3734 5.32832 11.2945 5.50449 11.2945 5.69922V11.2686V11.2947H11.2684H5.69922C5.50449 11.2947 5.32812 11.3736 5.20059 11.5012C5.07305 11.6287 4.99395 11.8053 4.99395 11.9998C4.99395 12.1947 5.07305 12.3711 5.20059 12.4986Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M1.46738 0H22.5326C22.9361 0 23.3029 0.165039 23.5689 0.431055C23.835 0.69707 24 1.06387 24 1.46738V22.5326C24 22.9361 23.8348 23.3029 23.5689 23.5689C23.3031 23.835 22.9363 24 22.5326 24H1.46738C1.06387 24 0.696875 23.835 0.431055 23.5689C0.165039 23.3031 0 22.9363 0 22.5326V1.46738C0 1.06387 0.165039 0.696875 0.431055 0.431055C0.69707 0.165234 1.06387 0 1.46738 0ZM5.20059 12.4986C5.32812 12.6262 5.50449 12.7053 5.69922 12.7053H11.2686H11.2947V12.7314V18.3008C11.2947 18.4955 11.3736 18.6719 11.5014 18.7996C11.6291 18.9273 11.8053 19.0062 12 19.0062C12.1947 19.0062 12.3711 18.9273 12.4988 18.7996C12.6266 18.6719 12.7053 18.4955 12.7053 18.3008V12.7314V12.7053H12.7314H18.301C18.4957 12.7053 18.6721 12.6264 18.7998 12.4986C18.9275 12.3709 19.0064 12.1945 19.0064 11.9998C19.0064 11.8053 18.9275 11.6289 18.7998 11.5012C18.6721 11.3734 18.4957 11.2947 18.301 11.2947H12.7312H12.7051V11.2686V5.69922C12.7051 5.50449 12.6264 5.32812 12.4986 5.20059C12.3709 5.07305 12.1945 4.99395 11.9998 4.99395C11.8051 4.99395 11.6289 5.07285 11.5012 5.20059C11.3734 5.32832 11.2945 5.50449 11.2945 5.69922V11.2686V11.2947H11.2684H5.69922C5.50449 11.2947 5.32812 11.3736 5.20059 11.5012C5.07305 11.6287 4.99395 11.8053 4.99395 11.9998C4.99395 12.1947 5.07305 12.3711 5.20059 12.4986Z"
                                        fill="#333399"
                                    />
                                </svg>
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
<div className=" grid grid-cols-1 justify-center w-full p-2  ">
                    <button
                        className={`${styles.primaryBackground} rounded-full min-h-9 h-9 border-none `}
                    >
                        Apply Transformation
                    </button>
                </div>
      </div>
      
    </div>
  )
}

export default ObjectRecolor