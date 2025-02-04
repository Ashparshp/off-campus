import React from 'react'
import { BackgroundGradient } from '../ui/background-gradient'
import { FaStar } from "react-icons/fa";
import ShineBorder from '../ui/shine-border'
import { FaArrowRight } from "react-icons/fa";
import { FaClock } from "react-icons/fa";


const MobileCards = ({key,product}) => {
  const icons = {
    'clock' : <FaClock />,
  }
  return (
    <div className=''>
     <BackgroundGradient className="rounded-[22px]  p-4  sm:p-10 bg-zinc-900 h-full">
        <div className='flex flex-col gap-5'>

          {/* Tags Section
          <div className='flex space-x-5'>
            

            <div className='space-x-2'>
              {product.tags.map((tag) => (
                <span key={tag.name} className={`text-xs font-semibold ${tag.color} px-2 py-1 rounded-[1rem]`}>{tag.name}</span>
              ))}
            </div>
          </div> */}
              
          {/* Title and Description */}
          <div className='space-y-2'>
            <h2 className='text-lg sm:text-xl font-semibold text-white'>{product.title}</h2>
            <p className='text-zinc-400'>{product.description}</p>
            <div className='flex space-x-2 items-center bg-slate-300 w-fit px-2 rounded-[1rem] py-1 text-sm'>
            <FaStar />
            <p className='font-semibold'>{product.rating}</p>
            </div>
          </div>

          {/* Function and Price */}
          <ShineBorder className='bg-[#0a0a0a]
           py-2 text-primary lg:mt-10 w-full'
           color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} >
           <div className='flex flex-col  lg:px-3 py-2 '>
                
                <div className='flex items-center gap-3'>
                    <div className='text-[2rem]'>
                  {icons[product.icon]}
                  </div>
                  <div>
                  <p className='font-semibold'>{product.subfunction}</p>
                  <p className='text-sm'>{product.function}</p>
                  </div>
              </div>

              <div>
            

           
              
            </div>
            </div>
          </ShineBorder>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-slate-800">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <div className='flex space-x-2 items-center'>
                
                <span className='text-[1.2rem]'>Book Now</span>
                <FaArrowRight  className='lg:text-lg'/>
              </div>
              </span>
            </button>


        </div>
       

     </BackgroundGradient>
    </div>
  )
}

export default MobileCards