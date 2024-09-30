import React, { useRef, useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tabs, products } from './data'
import Cards from './Cards'
import { motion } from 'framer-motion'
import { SlideLeft } from '@/utility/animations'

const Products = () => {
  const [data, setData] = useState(products)

  const handleTabs = (type) => {
    if (type === 'All') {
      return setData(products)
    }
    const newData = products.filter((product) => product.type === type)
    setData(newData);
  }

  return (
    <section className=' py-20 h-full  relative' >
      
      {/* Sticky tabs container */}
      <div className='sticky top-0 z-10 ' id="products">
        <Tabs defaultValue="All" className="w-full flex lg:justify-center items-center">
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
      <div className=' container grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-10 overflow-x-hidden'>
        {data.map((product,index) => (
          <motion.div
            key={product.id}
            variants={SlideLeft((index+1) * 0.3)}
            initial='hidden'
            whileInView={'visible'}
          >
            <Cards product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Products
