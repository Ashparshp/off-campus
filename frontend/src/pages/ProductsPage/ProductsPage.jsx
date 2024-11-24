import { products } from '@/components/ProductsSection/data'
import Products from '@/components/ProductsSection/Products'
import ProductsSection from '@/components/ProductsSection/ProductsSection'
import SideBar from '@/components/ProductsSection/SideBar'
import TopBanner from '@/components/ProductsSection/TopBanner'
import React, { useState } from 'react'
import { motion } from "framer-motion"

const ProductsPage = () => {
  const [data, setData] = useState(products);
  const handleTabs = (type) => {
    if(type === 'all') return setData(products);
   
    const newData = products.filter((product) => product.type === type)
    setData(newData);
  }
  return (
    
    <div className='margin py-4'>
      {/* <TopBanner handleTabs={handleTabs}/> */}
      <motion.div className="md:container w-full"  initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.5,delay:0.5}}>
      
      <h1 className="text-5xl sm:text-6xl font-bold mb-2 text-white text-center">Our Resources</h1>
      </motion.div>
      <ProductsSection data={data}/>
      {/* <div className='md:flex'>
      <SideBar handleTabs={handleTabs}/>
      <Products data={data} handleTabs={handleTabs}/>
      </div> */}
    </div>
  )
}

export default ProductsPage