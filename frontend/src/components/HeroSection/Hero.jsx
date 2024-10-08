import React from 'react'
import ActionButton from './ActionButton'
import {motion} from 'framer-motion'
import { SlideRight } from '../../utility/animations'
import { BackgroundLines } from '../ui/background-lines'
import { NavLink } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='relative container  '>
    
      {/* brand Info */}
      <div className="h-[40rem] w-full bg-black  bg-grid-white/[0.2]  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
    
      <div className=' py-14 md:my-20'>
        <div className='text-center space-y-6 text-white'>
         

          <motion.p 
          variants={SlideRight(0.4)}
          initial='hidden'
          animate='visible'
          className='text-white uppercase font-semibold'>Lorem ipsum dolor sit  </motion.p>


          <motion.h2 
            variants={SlideRight(0.6)}
            initial='hidden'
            animate='visible'
            className="text-6xl sm:text-7xl relative z-20  font-groplet-style">
       
            Find Your <br className='md:hidden'/>Perfect job
            {/* <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Perfect Tour</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                <span>Perfect Tour  </span>
              </div>
            </div> */}
          </motion.h2>


          <motion.p
          variants={SlideRight(0.8)}
          initial='hidden'
          animate='visible'
           className='lg:text-xl text-zinc-400'>We help you find perfect tutor for 1-on-1 lessons</motion.p>

          {/* Action Button */}

          <motion.div variants={SlideRight(0.9)}
          initial='hidden'
          animate='visible'>
           <NavLink to='/products'>
            <ActionButton />
            </NavLink>
         
          </motion.div>
         
          
        </div>
          
        
     
       
      </div>
      </div>
      {/* Image */}
      <div>
     
      </div>
     
    

    </div>
  )
}

export default Hero