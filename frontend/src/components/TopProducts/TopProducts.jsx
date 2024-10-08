import React from 'react'
import { MagicCard } from '../ui/magic-card'
import Ripple from '../ui/ripple'

const TopProducts = () => {

  const cardData = [
    {
      img: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      price: '$240,000',
      address: '123 Wallaby Avenue, Park Road',
      parking: '2 spaces',
      bathroom: '2 rooms',
      bedroom: '4 rooms'
    },
    {
      img: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      price: '$240,000',
      address: '123 Wallaby Avenue, Park Road',
      parking: '2 spaces',
      bathroom: '2 rooms',
      bedroom: '4 rooms'
    },
    {
      img: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      price: '$240,000',
      address: '123 Wallaby Avenue, Park Road',
      parking: '2 spaces',
      bathroom: '2 rooms',
      bedroom: '4 rooms'
    },
  ]
  return (
    <div className='container md:my-20 my-10 z-10 relative'>
      
      <h1 className='text-[3rem]  text-center z-10 font-groplet-style'>Top Products</h1>

      <div className='flex md:flex-row flex-col mt-10 gap-20'>
        {cardData.map((card, index) => (
           <MagicCard
        className="cursor-pointer "
        gradientColor={ "rgb(251, 144, 20)  " }
        
        gradientOpacity = {0.4}
      >
        <a href="/courses/101" className=" rounded-lg p-4 flex flex-col gap-9 w-full ">
  <img
    alt=""
    src={cardData[0].img}
    className="h-56 w-full rounded-md object-cover"
  />

  <div className="mt-2">
    <dl>
      <div>
        

        <p className="text-sm text-gray-500">$240,000</p>
      </div>

      <div>
        <dt className="sr-only">Address</dt>

        <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
      </div>
    </dl>

    <div className="mt-6 flex items-center gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Parking</p>

          <p className="font-medium">2 spaces</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Bathroom</p>

          <p className="font-medium">2 rooms</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Bedroom</p>

          <p className="font-medium">4 rooms</p>
        </div>
          </div>
        </div>
      </div>
    </a>
      </MagicCard>
        ))}
     
        
       
      
      </div>
    </div>
  )
}

export default TopProducts