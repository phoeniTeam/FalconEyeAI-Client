import React from 'react'
import styles from '../../styles';
import CreditIcon from "../../assets/icons/creditIcon"; 

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
                    Recolor objects in the image
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
      </div>
      
    </div>
  )
}

export default ObjectRecolor