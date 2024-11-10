import React, { useState } from 'react'
import { NavbarMenu } from '../../mock_data/data';
import {MdMenu} from 'react-icons/md'
import {motion} from 'framer-motion';
import Hamburger from './Hamburger';
import LoginButton from '../LoginButton/LoginButton';


const Navbar = ({isOpen,handleSubMenu}) => {
  
  return (
    <>
      <motion.nav 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5,delay:0.5}}
      className='fixed top-0 left-0 right-0 z-50  shadow-md'
      >
        <div className='container  flex justify-between items-center py-2  bg-clip-padding backdrop-blur-lg bg-opacity-80'>
          {/* Logo Section */}
          <div className= "text-2xl flex items-center gap-2 font-bold text-primary">
          <p className=''>OFF CAMPUS</p>
          </div>

          {/* Menu Section */}
          <div className='hidden lg:block '>
            <ul className='flex max-w-fit  inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-black  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  pr-2 pl-8 py-2  items-center justify-center space-x-4'>  
              {
                NavbarMenu.map((item) => {
                  return  (
                  <li key={item.id}>
                    <a href={item.url} className='inline-block text-zinc-200 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-tertiary-100 transition-all duration-300 font-semibold'>{item.name}</a>
                  </li>
                  )
                  })
              }
            </ul>

          </div>

          {/* CTA Section */}
          <div className='hidden lg:block '>
          <LoginButton/>
         
          </div>
          
          {/* Mobile Hamburger Menu */}
          <div className='lg:hidden text-primary' onClick={handleSubMenu}>
            <MdMenu className='text-4xl '/>
            
          </div>
        </div>

      </motion.nav>

      {/* Mobile SideBar section */}
      <Hamburger isOpen={isOpen} handleSubMenu={handleSubMenu}/>
    </>
  )
}

export default Navbar