import React from 'react'
import { BackgroundGradient } from '../ui/background-gradient'


const Cards = ({key,product}) => {
  return (
    <div>
     <BackgroundGradient className="rounded-[22px]  p-4  sm:p-10 bg-zinc-900 h-full">
        <div className='flex flex-col space-y-4'>
          
          <div className='text-center'>
            <h2 className='text-lg sm:text-xl font-semibold text-white'>{product.title}</h2>
            <p className='text-zinc-400'>{product.description}</p>
          </div>
        </div>
     </BackgroundGradient>
    </div>
  )
}

export default Cards