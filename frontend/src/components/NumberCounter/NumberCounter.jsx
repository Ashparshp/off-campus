import React from 'react'
import CountUp from 'react-countup'
import FlickeringGrid from '../ui/flickering-grid'
import { MagicCard } from '../ui/magic-card'
import { FaStar } from 'react-icons/fa'

const NumberCounter = () => {
  return (
    <div className=' text-white py-12 relative z-10 '>
     
      <div className='container grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-4'>
      {/* <FlickeringGrid
        className=" absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      
      /> */}

        <MagicCard className='numbers' gradientColor='rgb(123, 143, 217)' gradientSize={200} gradientOpacity={0.5}>
          <p className='text-3xl font-[700]'>
            <CountUp start = {0} end={150} duration={3} suffix='+'enableScrollSpy={true} scrollSpyOnce={true} />
          </p>
          <p>Students Placed</p>
        </MagicCard>

        <MagicCard className='numbers' gradientColor='rgb(123, 143, 217)' gradientSize={200} gradientOpacity={0.5}>
          <p className='text-3xl font-[700]'>
          <CountUp end={4000} separator=',' suffix='+' duration={3} enableScrollSpy={true} scrollSpyOnce={true} />
          </p>
          <p>Booking</p>
        </MagicCard>

        <MagicCard className='numbers' gradientColor='rgb(123, 143, 217)' gradientSize={200} gradientOpacity={0.5}>
          <p className='text-3xl font-[700] flex gap-2'>
          <FaStar className='text-yellow-300'/>
          <CountUp start = {0} end={4} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />.5
          </p>
         
          
        </MagicCard>

        <MagicCard className='numbers' gradientColor='rgb(123, 143, 217)' gradientSize={200} gradientOpacity={0.5}>
          <p className='text-3xl font-[700]'>
          <CountUp  end={30000} suffix='+' duration={3} enableScrollSpy={true} scrollSpyOnce={true} separator=',' />
          </p>
          <p>Community</p>
        </MagicCard>
        
      </div>
    </div>
  )
}

export default NumberCounter