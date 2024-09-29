import React from 'react'
import CountUp from 'react-countup'
import FlickeringGrid from '../ui/flickering-grid'

const NumberCounter = () => {
  return (
    <div className=' text-white py-12 relative z-10'>
     
      <div className='container grid grid-cols-2 md:grid-cols-4 gap-8 '>
      <FlickeringGrid
        className=" absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      
      />

        <div className='flex flex-col items-center justify-center '>
          <p className='text-3xl font-[700]'>
            <CountUp start = {0} end={900} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />
          </p>
          <p>Lorem</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl font-[700]'>
          <CountUp end={20000} separator=',' suffix='+' duration={3} enableScrollSpy={true} scrollSpyOnce={true} />
          </p>
          <p>Lorem</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl font-[700]'>
          <CountUp start = {0} end={900} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />
          </p>
         
          <p>Lorem</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <p className='text-3xl font-[700]'>
          <CountUp start = {0} end={900} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />
          </p>
          <p>Lorem</p>
        </div>
        
      </div>
    </div>
  )
}

export default NumberCounter