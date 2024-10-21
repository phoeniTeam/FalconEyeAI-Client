import React from 'react'
import styles from '../../styles'
import Input from '../../components/input'
function BackgroundRemoval() {
  return (
    <div className={`${styles.outerWrapper}`}>
<div className={`${styles.wrapper}`}>
  <div className='flex justify-between '>
  <h1 className={`${styles.heading3} text-white `}>Background Removal</h1>
  <div className='flex  gap-2'>
  <svg
              width="40"
              height="40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.6711 19.9918C36.6711 29.1966 29.2093 36.6585 20.0045 36.6585C10.7998 36.6585 3.33789 29.1966 3.33789 19.9918C3.33789 10.7871 10.7998 3.32514 20.0045 3.32514C29.2093 3.32514 36.6711 10.7871 36.6711 19.9918ZM12.9335 19.9918L20.0045 27.0629L27.0756 19.9918L20.0045 12.9208L12.9335 19.9918Z"
                fill="url(#paint0_linear_159_7)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_159_7"
                  x1="3.33789"
                  y1="19.9918"
                  x2="36.6711"
                  y2="19.9918"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#333399" />
                  <stop offset="0.5" stop-color="#333399" />
                  <stop offset="1" stop-color="#FF00CC" />
                </linearGradient>
              </defs>
            </svg>
            <div className={`${styles.heading4} text-white `}>236</div>
            </div>
            
  </div>
  <div className="flex flex-col items-start gap-1">
          <div className={`${styles.paragraph2} text-white `}>
            Identify and elimante objects from image
          </div>
          <div className="flex items-center justify-start gap-4">
            <span>
              <svg
                width="30"
                height="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3369 15.9935C29.3369 23.3573 23.3674 29.3268 16.0036 29.3268C8.63982 29.3268 2.67029 23.3573 2.67029 15.9935C2.67029 8.62975 8.63982 2.66015 16.0036 2.66015C23.3674 2.66015 29.3369 8.62975 29.3369 15.9935ZM10.3468 15.9935L16.0036 21.6504L21.6605 15.9935L16.0036 10.3367L10.3468 15.9935Z"
                  fill="url(#paint0_linear_159_15)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_159_15"
                    x1="2.67029"
                    y1="15.9935"
                    x2="29.3369"
                    y2="15.9935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#333399" />
                    <stop offset="0.5" stop-color="#333399" />
                    <stop offset="1" stop-color="#FF00CC" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div className={`${styles.paragraph2} text-white `}>12</div>
          </div>
        </div>
  <Input label="Image Title" id="imageTitle" />
  <div className='grid grid-cols-2 justify-items-center'>
<div>
  <h4 className={`${styles.heading4}`}>Original</h4>

</div>
<div>
<h4 className={`${styles.heading4}`}>Transformed</h4>
</div>
  </div>
  </div>   
  <div>
    <button className={`${styles.primaryBackground}`}>Apply Transformation</button>
    </div>   
    </div>
  )
}

export default BackgroundRemoval