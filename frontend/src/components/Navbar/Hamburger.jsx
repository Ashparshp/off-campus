import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { NavbarMenu } from '@/mock_data/data'
import { Link, NavLink } from 'react-router-dom'

const Hamburger = ({isOpen}) => {
  return (
   <>
    <AnimatePresence mode = "wait">
      {
        isOpen  && <motion.div 
        initial = {{opacity: 0,y:-100}}
        animate = {{opacity: 1,y:0}}
        exit = {{opacity: 0,y:-100}}
        transition = {{duration: 0.3}}
        className='absolute top-20 left-0 w-full h-screen z-50 lg:hidden'
        >
          <div className='text-xl font-semibold uppercase bg-tertiary-100 text-white py-10 m-6 rounded-3xl '>
            <ul className='flex flex-col justify-center items-center gap-6'>
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <NavLink to={item.url} >{item.name}</NavLink>
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