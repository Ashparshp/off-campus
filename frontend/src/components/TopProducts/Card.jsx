import { Star, Clock, BookOpen } from "lucide-react"



export default function Card ({ course }){
  return (
  <a href="/course/101" className="bg-secondary-300 text-white rounded-lg shadow-md overflow-hidden">
    <img src={course.image} alt={course.title} className="w-full  object-cover" />
    <div className="p-4">

          <div className='flex space-x-5 mb-3'>
            

            <div className='space-x-2'>
              {course.tags.map((tag) => (
                <span key={tag.name} className={`text-xs font-semibold bg-blue-200  text-blue-800 px-2 py-1 rounded-[1rem]`}>{tag.name}</span>
              ))}
            </div>
          </div>
      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
      <div className="flex items-center mb-2">
        <Star className="w-4 h-4 text-yellow-400 fill-current" />
        <span className="text-sm text-gray-300 ml-1">{course.rating}</span>
        <span className="text-sm text-gray-100 ml-1">({course.reviews})</span>
      </div>
      <div className="flex items-center text-sm text-gray-200 mb-2">
        <Clock className="w-4 h-4 mr-1" />
        <span>{course.duration}</span>
        <BookOpen className="w-4 h-4 ml-2 mr-1" />
        <span>{course.lessons} lessons</span>
      </div>
      <div className="flex items-center mb-2">
        <img src={course.instructor.avatar} alt={course.instructor.name} className="w-6 h-6 rounded-full mr-2" />
        <span className="text-sm text-gray-300">{course.instructor.name}</span>
      </div>
      <div className="text-lg font-bold text-purple-500">${course.price.toFixed(2)}</div>
    </div>
  </a>
  )
}


