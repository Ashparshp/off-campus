import React, { useRef, useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tabs, products } from './data'

import { motion } from 'framer-motion'
import { SlideLeft } from '@/utility/animations'
import SideBar from './SideBar'
import MobileCards from './MobileCards'
import DesktopCards from './DesktopCards'

const Products = ({data,handleTabs}) => {

  return (
    <section className='  h-full  relative' >
      
      {/* Sticky tabs container */}
     

      <div className='sticky top-[3.2rem] z-10 md:hidden' id="products">
        <Tabs defaultValue="1:1 call" className="w-full flex lg:justify-center items-center">
          <TabsList>
            {tabs.map((tab) => (
              <a href="#products" key={tab.id}>
                <TabsTrigger value={tab.title} onClick={() => handleTabs(tab.title)}>
                  {tab.title}
                </TabsTrigger>
              </a>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Products Grid */}
     
      <div className=' container grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-10 overflow-x-hidden md:hidden'>
        
        {data.map((product,index) => (
          <motion.div
            key={product.id}
            variants={SlideLeft((index+1) * 0.3)}
            initial='hidden'
            whileInView={'visible'}
          >
            
            <MobileCards product={product} />
          </motion.div>
        ))}
      </div>
      
      <div className=' container mt-8 gap-10 overflow-x-hidden hidden md:flex flex-col'>
        
        {data.map((product,index) => (
          <motion.div
            key={product.id}
            variants={SlideLeft((index+1) * 0.3)}
            initial='hidden'
            whileInView={'visible'}
          >
            
            <DesktopCards product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Products
