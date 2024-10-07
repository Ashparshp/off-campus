import Hero from '@/components/HeroSection/Hero'
import { MarqueeDemo } from '@/components/Testimonials/Testimonials'
import NumberCounter from '@/components/NumberCounter/NumberCounter'
import React from 'react'
import TopProducts from '@/components/TopProducts/TopProducts'
import Ripple from '@/components/ui/ripple'

const HomePage = () => {
  return (
    <div className=''>
     
     <Hero />
        <div className='relative w-full overflow-x-hidden overflow-y-hidden'>
        <Ripple className = "top-20 md:block hidden " mainCircleSize={600}
        mainCircleOpacity={0.3}
        numCircles= {10}/>

<Ripple className = " md:hidden block " mainCircleSize={100}
        mainCircleOpacity={0.8}
        numCircles= {10}/>

       
       
        <NumberCounter/>
        <TopProducts/>
        
        </div>
        
        
        
        <MarqueeDemo/>
        
     
    </div>
  )
}

export default HomePage