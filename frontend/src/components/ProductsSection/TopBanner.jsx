import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const courses = [
  { id: 'all', name: 'All Courses' },
  { id: 'courses', name: 'Courses' },
  { id: 'one-one-call', name: '1:1 call' },
  { id: 'priority-dm', name: 'Priority DM' },
  { id: 'digital-product', name: 'Digital Products' },
 
  { id: 'package', name: 'Package' },
]

const TopBanner = ({handleTabs}) => {
  const [selectedCourse, setSelectedCourse] = useState('all')

 

  return (
    <motion.div className="md:container sticky top-[3.2rem] md:top-20 z-20" 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5,delay:0.5}}>
      <div className="w-full mx-auto bg-secondary-300  px-5 py-5 md:px-10 md:rounded-xl">
        <h1 className="text-3xl font-bold mb-2 text-white ">Our Products</h1>
        <p className="text-gray-300 mb-6  md:block hidden">
          You can start learning these courses and get certified withing a days 
        </p>
        <div className="flex whitespace-nowrap gap-4 overflow-y-auto pb-3">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => {handleTabs(course.id) (setSelectedCourse(course.id))}}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCourse === course.id
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {course.name}
            </button>
          ))}
        </div>
      </div>
      
    </motion.div>
  )
}

export default TopBanner