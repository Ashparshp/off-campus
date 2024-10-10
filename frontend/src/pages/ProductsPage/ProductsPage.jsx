import { products } from '@/components/ProductsSection/data'
import Products from '@/components/ProductsSection/Products'
import ProductsSection from '@/components/ProductsSection/ProductsSection'
import SideBar from '@/components/ProductsSection/SideBar'
import TopBanner from '@/components/ProductsSection/TopBanner'
import React, { useState } from 'react'

const ProductsPage = () => {
  const [data, setData] = useState(products);
  const handleTabs = (type) => {
    if(type === 'all') return setData(products);
   
    const newData = products.filter((product) => product.type === type)
    setData(newData);
  }
  return (
    
    <div className='margin'>
      <TopBanner handleTabs={handleTabs}/>
      <ProductsSection data={data}/>
      {/* <div className='md:flex'>
      <SideBar handleTabs={handleTabs}/>
      <Products data={data} handleTabs={handleTabs}/>
      </div> */}
    </div>
  )
}

export default ProductsPage