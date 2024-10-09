import React from 'react'
import Cards from './Cards'

const ProductsSection = ({data}) => {
  return (
    <div className='container mt-10 w-full gap-10 grid md:grid-cols-2'>
      {data.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
     
    </div>
  )
}

export default ProductsSection