import React from 'react'
import { BarChart3, Calendar, BookOpen, MessageSquare } from "lucide-react"

const FeatureSection = () => {
  return (
    <div className="container py-20 ">
      <div className="flex justify-center w-full  mb-8 ">
        <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          WHY CHOOSE US
        </div>
        
      </div>
      <h2 className="md:text-5xl text-4xl mb-8  text-center font-style-gradient">
        Dive into online courses on {'' }
        <br className='md:hidden'/>
        diverse subjects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          icon={<BarChart3 className="w-6 h-6 text-white" />}
          title="Progress Tracking and Certifications"
          description="Provide features to track users progress, such as completion percentage, module-wise performance achievements."
          color="bg-orange-500"
        />
        <FeatureCard
          icon={<Calendar className="w-6 h-6 text-white" />}
          title="Accessibility and Convenience"
          description="Provide the flexibility to learn anytime, anywhere, making education accessible to a wider audience."
          color="bg-blue-500"
        />
        <FeatureCard
          icon={<BookOpen className="w-6 h-6 text-white" />}
          title="Diverse Course Selection"
          description="Offer a vast range of subjects and topics to choose from, allowing users to explore their interests, acquire new skills."
          color="bg-yellow-500"
        />
        <FeatureCard
          icon={<MessageSquare className="w-6 h-6 text-white" />}
          title="Interactive Learning Experience"
          description="Interactive elements like quizzes, exercises, and discussion forums, and enhancing the learning experience."
          color="bg-green-500"
        />
      </div>
    </div>
  )
}
function FeatureCard({ icon, title, description, color }) {
  return (
    <div className="bg-secondary-300 p-6 rounded-lg shadow-lg flex items-start space-x-4">
      <div className={`${color} p-3 rounded-lg`}>{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-2 text-white">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  )
}

export default FeatureSection