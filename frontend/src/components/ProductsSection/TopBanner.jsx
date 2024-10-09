import React, { useState } from 'react'

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
    <div className="container sticky top-[3.2rem] md:top-20">
      <div className="w-full mx-auto bg-secondary-300  px-5 py-5 md:px-10 md:py-8 rounded-xl bg-clip-padding backdrop-blur-lg bg-opacity-80">
        <h1 className="text-3xl font-bold mb-2 text-white ">Our Products</h1>
        <p className="text-gray-300 mb-6  md:block hidden">
          You can start learning these courses and get certified withing a days 
        </p>
        <div className="flex whitespace-nowrap gap-4 overflow-y-auto">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => handleTabs(course.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCourse === course.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {course.name}
            </button>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default TopBanner