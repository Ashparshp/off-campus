import React, { useEffect } from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import { initFlowbite } from 'flowbite'
import { NavLink } from 'react-router-dom'
import { TiArrowRightThick } from "react-icons/ti";

const ModulesSection = ({data,handleModuleChange}) => {
  useEffect(() => {
    initFlowbite()
  }, [])
  return (
    <>
    

    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 ms-4 flex items-center gap-2 md:hidden">

      Content
      <TiArrowRightThick className='text-2xl'/>
    </button>
            
          

    <aside id="logo-sidebar" class="fixed top-[4rem] left-0 z-40 w-64 md:w-[19rem] h-screen transition-transform -translate-x-full md:translate-x-0" aria-label="Sidebar">
      <div class="h-full px-4 pt-4 overflow-y-auto bg-gray-black">
      
          <ul class="space-y-2 font-medium">
          <div className='p-2 text-white font-[800] text-2xl'>Content</div>
            {data.map((module) => {
              const {id, title, duration} = module
              return (
                <li key={id} class="p-2 rounded-lg hover:bg-gray-700"
                onClick={()=>handleModuleChange(module)}>
                  <div  class="flex items-center justify-between">
                      <div class="flex flex-col">
                        <span class="text-sm text-gray-300">{title}</span>
                        <span class="text-xs text-gray-500">{duration}</span>
                      </div>
                      <TiArrowRightThick className='text-white text-xl'/>
                  </div>
                </li>
              )})
            }
          </ul>
      </div>
    </aside>

    <div class="p-4 sm:ml-64"> 
    </div>

    </>
  )
}

export default ModulesSection