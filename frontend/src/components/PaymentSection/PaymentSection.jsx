import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { initFlowbite } from 'flowbite';

export default function PaymentSection() {
  const navigate = useNavigate();
  const [selectedPrice, setSelectedPrice] = useState('99')
  useEffect(() => {
    initFlowbite()
  }, [])

  return (
    <>
    <div className="w-full max-w-md mx-auto bg-secondary-300 text-gray-100 rounded-lg shadow-md overflow-hidden pb-20 md:mt-20 mt-[3.2rem] ">
      <div className="flex items-center space-x-4 p-4 border-b border-gray-700 ">
        <button className="text-gray-400 hover:text-gray-200" onClick={()=>navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-600"></div>
          <span className="font-semibold">Charchit Kurra</span>
      </div>

      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">How To Crack Off Campus Internships</h1>
        <p className="text-sm text-gray-400 mb-4">Courses</p>
        <form>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone number</label>
              <div className="flex mt-1">
                <select className="block  px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-md shadow-sm text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="+91">🇮🇳 +91</option>
                </select>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="Enter your phone number" 
                  className="flex-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-r-md shadow-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="booking" 
                name="booking" 
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 bg-gray-700 border-gray-600 rounded" 
              />
              <label htmlFor="booking" className="text-sm text-gray-300">Receive booking details on phone</label>
            </div>
            
            
            <div className="mt-6 bg-gray-700 rounded-md p-4">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>1 x How to Crack Off Campus Internships</span>
                  <span>₹{selectedPrice}</span>
                </div>
                <div className="flex justify-between">
                <div id="tooltip-animation" role="tooltip" class="absolute z-10 invisible  px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 flex">
                This fee helps us operate and
                <br></br> improve our platform, 
                <br></br>
                delivering a seamless experience
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
                  <span className="flex items-center">
                    Platform fee
                    <svg xmlns="http://www.w3.org/2000/svg" data-tooltip-target="tooltip-animation" className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span>₹5</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t border-gray-600">
                  <span>Total</span>
                  <span>₹{parseInt(selectedPrice) + 5}</span>
                </div>
              </div>
              
            </div>
          </div>
        </form>
        <div className="mt-4 text-sm text-gray-400 flex flex-col justify-between items-center">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Payments are 100% secure & encrypted
                </span>
               
                <span>
                  <a href="#" className="text-blue-400 hover:underline">Terms</a> | <a href="#" className="text-blue-400 hover:underline">Privacy</a>
                </span>
              </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          Powered by offcampus.in
        </div>
      </div>
      
      
    </div>
    <div className="fixed bottom-0 left-0 right-0  p-4 border-t border-gray-700 bg-secondary-300 max-w-md mx-auto">
    <div className="w-full   flex justify-between items-center">
      <button 
        type="button" 
        className="px-4 py-2 bg-gray-700 text-gray-200 rounded-md flex items-center hover:bg-gray-600 transition-colors"
      >
        ₹{parseInt(selectedPrice) + 5}+
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button 
        type="submit" 
        className="flex-1 ml-2 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Confirm & Pay
      </button>
    </div>
  </div>
    </>
  )
}