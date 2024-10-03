import React, { useState } from 'react'
import { NavbarMenu } from '../../mock_data/data';
import {MdMenu} from 'react-icons/md'
import {motion} from 'framer-motion';
import Hamburger from './Hamburger';

const Navbar = ({isOpen,handleSubMenu}) => {
  
  return (
    <>
      <motion.nav 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5,delay:0.5}}
      >
        <div className='container lg:grid lg:grid-cols-[1fr_auto_1fr] flex justify-between items-center py-6'>
          {/* Logo Section */}
          <div className= "text-2xl flex items-center gap-2 font-bold text-primary">
          <p className=''>OFF CAMPUS</p>
          </div>

          {/* Menu Section */}
          <div className='hidden lg:block '>
            <ul className='flex items-center gap-6'>  
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
            {/* <button className='font-semibold '>Sign In</button>
            <button className='font-semibold '>Sign In</button>  */}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className='lg:hidden text-primary' onClick={handleSubMenu}>
            <MdMenu className='text-4xl '/>
            
          </div>
        </div>

      </motion.nav>

      {/* Mobile SideBar section */}
      <Hamburger isOpen={isOpen}/>
    </>
  )
}

export default Navbar