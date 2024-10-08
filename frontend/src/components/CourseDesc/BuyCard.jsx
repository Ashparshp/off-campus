import React from 'react'
import   { CheckCircle2, CheckIcon }  from 'lucide-react'

const BuyCard = () => {
  return (
    <div className="">
            <div className="h-full w-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100 p-6 rounded-lg">
              <img
                src="https://www.codehelp.in/_next/image?url=https%3A%2F%2Fdgyugonj9a9mu.cloudfront.net%2FWhats_App_Image_2024_03_13_at_4_25_55_PM_cc1da9dcda.jpeg&w=640&q=100"
                alt="Course Thumbnail"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="mb-4">
                <span className="text-3xl font-bold bg-gradient-to-br to-[#631aff] from-[#fff9f8] bg-clip-text text-transparent">₹3499</span>
                <span className="text-gray-400 line-through ml-2">₹7000</span>
              </div>
              <h4 className="text-xl font-semibold mb-4">This Course Includes :</h4>
              <ul className="space-y-2">
                {[
                  "No Pre-requisite Required",
                  "170+ hours Video Content",
                  "450+ Curated Coding Questions (asked by Top Companies)",
                  "MEGA Problem-Solving Classes [First in Industry]",
                 
                ].map((item, index) => (
                  <li key={index} className="flex  gap-2">
                    <CheckCircle2 className="min-w-5 max-w-5  text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  )
}

export default BuyCard