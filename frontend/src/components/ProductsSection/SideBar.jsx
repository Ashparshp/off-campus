import React, { useState } from 'react';

import { IoCall } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { PiPackageFill } from "react-icons/pi";
import { BsFillBookFill } from "react-icons/bs";
import {motion} from 'framer-motion';

const SideBar = ({handleTabs}) => {
  const [activeTab, setActiveTab] = useState(2);
  const tabs = [
  
    {
      id: 2,
      title: '1:1 call',
      icon : <IoCall />
    },
    {
      id: 3,
      title: 'Priority DM',
      icon : <FaMessage />
    },
    {
      id: 4,
      title: 'Digital Products',
      icon : <AiFillProduct />
    },
    {
      id: 5,
      title: 'Courses',
      icon : <BsFillBookFill />
      
    },
    {
      id: 6,
      title: 'Package',
      icon : <PiPackageFill />
    },
  ]
  

  return (
    <motion.aside
    initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5,delay:0.5}}
      id="logo-sidebar"
      className="sticky top-0 left-0 z-40 w-auto h-screen transition-transform -translate-x-full border-r sm:translate-x-0 text-zinc-400 hidden md:block pr-4 xl:pl-[5rem] lg:pl-[4rem] py-5"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {tabs.map((tab) => (
            <li key={tab.id} onClick={() => handleTabs(tab.title)}>
              <div
             
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group whitespace-nowrap ${
                  activeTab === tab.id ? 'bg-gray-700' : ''
                }`}
              > 
              <div>{tab.icon}</div>
                <span className="ms-3">{tab.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
};

export default SideBar;
