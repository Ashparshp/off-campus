import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { NavbarMenu } from '@/mock_data/data'
import { Link, NavLink } from 'react-router-dom'
import { GiCrossMark } from "react-icons/gi";

const Hamburger = ({isOpen,handleSubMenu}) => {
  return (
   <>
    <AnimatePresence mode = "wait">
      {
        isOpen  && <motion.div 
        initial = {{opacity: 0,x:100}}
        animate = {{opacity: 1,x:0}}
        exit = {{opacity: 0,x:100}}
        transition = {{duration: 0.3}}
        className='fixed  top-0 right-0 w-64 h-screen z-50 lg:hidden overflow-y-hidden '
        >
         
          <div className='text-xl font-semibold uppercase bg-black text-white py-10   w-full  h-full relative'>
          <button className='absolute top-4 bg-gray-800 p-3 rounded-[50%] right-4' onClick={handleSubMenu}>
            <GiCrossMark />
            </button>
            <ul className='flex flex-col  pl-9 pt-8 gap-6'>
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.url} >{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      }
    </AnimatePresence>
   </>
  )
}

export default Hamburger