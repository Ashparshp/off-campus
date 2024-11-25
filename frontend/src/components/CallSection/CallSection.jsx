import React from 'react'
import { Star } from 'lucide-react'
import DateTimePicker from './DateTimePicker'

const CallSection = () => {
  return (
    <div className=" py-8 bg-gradient-to-b from-black to-gray-900 container space-y-9 relative">
      {/* <nav className=" py-4 text-gray-400">
        <p>Home &gt; Courses &gt; Data Structures & Algorithms BootCamp @Supreme-3.0</p>
      </nav> */}
       
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="md:text-5xl text-4xl font-bold mb-4 pb-5 font-style-gradient ">Get a One to One Call</h1>
            <div className="flex items-center gap-4 mb-8">
              <span className=" text-green-500 px-2 py-1 rounded">100+ Lectures</span>
              <span className="text-blue-400">Hindi</span>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">4.9</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 inline" fill="currentColor" />
                ))}
              </div>
              
            </div>
          
      
            
           
          </div>
        </div>
        <div className='md:hidden block '>
         <DateTimePicker/>
      </div>
      <div className='absolute lg:w-1/4 top-10 right-20 hidden md:block'>
      <DateTimePicker />
      </div>
      </div>
  )
}

export default CallSection