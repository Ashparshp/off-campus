import React, { useRef, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tabs } from './data'
import { products } from './data'
import Cards from './Cards'
import { motion } from 'framer-motion'
import { SlideLeft } from '@/utility/animations'


const Products = () => {
  const [data,setData] = useState(products)
  const tabsRef = useRef(null);
  const handleTabs = (type) => {

    
    
    if(type === 'All') {
      return setData(products)
    }
    const newData = products.filter((product) => product.type === type)
    setData(newData);
  }
  return (
    <div className='container py-20 '>
      <Tabs defaultValue="All" className="w-full flex lg:justify-center items-center ">
      <TabsList className = "">
        {tabs.map((tab) => (
          <a href="#products">
          <TabsTrigger key={tab.id} value={tab.title} onClick={()=>{handleTabs(tab.title)}}>
            {tab.title}
          </TabsTrigger>
          </a>
        ))}
       
      </TabsList>
     
    </Tabs>
    
      <section className='grid lg:grid-cols-3 md:grid-cols-2  mt-8 gap-10' id='products'>
      
      { 
          data.map((product) => (
            <motion.div
            variants={SlideLeft(product.id * 0.3)}
            initial = 'hidden'
            whileInView={"visible"}
            >
             <Cards key={product.id} product={product} />
           
            </motion.div>
          
          ))
        }
    
    </section>
    </div>
  )
}

export default Products