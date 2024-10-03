import { products } from '@/components/ProductsSection/data'
import Products from '@/components/ProductsSection/Products'
import SideBar from '@/components/ProductsSection/SideBar'
import React, { useState } from 'react'

const ProductsPage = () => {
  const [data, setData] = useState(products.filter((product) => product.type === '1:1 call'))
  const handleTabs = (type) => {
   
    const newData = products.filter((product) => product.type === type)
    setData(newData);
  }
  return (
    <div className='md:flex'>
      <SideBar handleTabs={handleTabs}/>
      <Products data={data} handleTabs={handleTabs}/>
    </div>
  )
}

export default ProductsPage