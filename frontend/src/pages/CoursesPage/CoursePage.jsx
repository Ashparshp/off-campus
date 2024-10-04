import ModulesSection from '@/components/ModulesSection/ModulesSection'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer'
import VideoSection from '@/components/VideoSection/VideoSection'
import React from 'react'
import { data } from './data'
import Navbar from '@/components/Navbar/Navbar'

const CoursePage = () => {
  const [module, setModule] = React.useState(data[0]);
  const handleModuleChange = (module) => {
    setModule(module);
  };
  return (
    <>
    
    <div className='md:flex'>

      <ModulesSection data={data} handleModuleChange={handleModuleChange}/>
      <VideoSection data={data} module={module}/>
      
    </div>
    </>
  )
}

export default CoursePage