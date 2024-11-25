import React from 'react'
import BuyCard from './BuyCard'
import { Star } from 'lucide-react'
import BuyNowButton from './BuyNowButton'

const CourseDesc = () => {
  return (
    <div className=" text-white min-h-screen relative  ">
      
      <div className=" py-8 bg-gradient-to-b from-black to-gray-900 container space-y-9">
      {/* <nav className=" py-4 text-gray-400">
        <p>Home &gt; Courses &gt; Data Structures & Algorithms BootCamp @Supreme-3.0</p>
      </nav> */}
        <h2 className="text-xl mb-4 ">Welcome to off-campus</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="md:text-5xl text-4xl font-bold mb-4 pb-5 font-style-gradient ">Some Crazy Course Name</h1>
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
          
            <BuyNowButton/>
            
           
          </div>
        </div>
        <div className='md:hidden block '>
      <BuyCard/>
      </div>
      </div>
     
      <div className=' py-8 container '>
        <div className='lg:w-2/3'>
            <h3 className="text-2xl font-semibold mb-4">About Course</h3>
            <p className="mb-4">
              A comprehensive program that covers the fundamentals of data structures and algorithms. It includes lectures
              and exercises to help students design and implement efficient solutions. This course is suitable for beginners
              and experienced programmers and aims to prepare students for technical interviews and placement exams.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-4 mb-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <span>Mode of the Course LIVE + Recordings</span>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                <span>No. Of Lectures 60 LIVE lectures + Recordings [HomeWork]</span>
              </div>
            </div>
        </div>
      
      </div>

      <div className='absolute lg:w-1/4 top-10  right-20 hidden md:block'>
      <BuyCard />
      </div>
    </div>
  )
}

export default CourseDesc