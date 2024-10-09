import { ChevronRight } from "lucide-react"
import { Star } from "lucide-react"
import { MdOutlineSell } from "react-icons/md";


export default function Cards({
  courseTitle = "JavaScript Fundamentals",
  chapterNumber = 4,
  chapterTitle = "Callbacks & Closures",
  completedChallenges = 6,
  totalChallenges = 9
}) {
  return (
    <div className="grid md:grid-cols-2 w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="flex flex-col justify-between bg-indigo-900 p-6 text-white gap-4">
        <div className=" space-y-1">
          <h6 className="mb-2 text-sm font-medium uppercase text-indigo-300">Course</h6>
          <h2 className="text-2xl font-bold">{courseTitle}</h2>
          <div className="flex items-center ">
          <span className="text-yellow-400 mr-2">4.9</span>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 inline" fill="currentColor" />
          ))}
        </div>
        
        </div>
        <div className="flex items-center gap-2"> <MdOutlineSell />
        <span>512 sales</span></div>
        
       
      </div>
      <div className="flex flex-1 flex-col justify-between p-6 ">
        <div>
          <h6 className="mb-2 text-sm font-medium uppercase text-gray-500">Description</h6>
          <h3 className="text-xl font-bold text-gray-900">
            60 Mins Video Meeting
          </h3>
        </div>
        <div className="mt-4">
          <div className="mb-2 flex justify-between text-sm text-gray-600">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, nemo corrupti placeat nulla, ipsum maiores nostrum tempora iure amet ducimus, quidem corporis commodi nisi. Amet autem vitae quibusdam odit nobis!
          </div>
         
        </div>
        <button className="mt-4 self-end rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Buy Now
        </button>
      </div>
    </div>
  )
}