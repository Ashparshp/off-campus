import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Dialog, DialogClose, DialogContent,DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import { MainContext } from '@/context/MainContext';


const BuyNowButton = () => {
  const navigate = useNavigate();
  const location = useLocation();  // Get the current page location
  const {user} = useContext(MainContext);

  const handleNavigation = () => {
    const currentPath = location.pathname;  // Get the current URL path
    navigate(`${currentPath}/pay`);  // Append `/pay` to the current URL
  }

  return (
    <>
    {user ? <button
      onClick={handleNavigation}  
      className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
    >
      BUY NOW
    </button>
    :
     <Dialog>
      <DialogTrigger>
      <button
      
      className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
    >
      BUY NOW
    </button>
      </DialogTrigger>
      
      <DialogContent className = "border-none bg-inherit" closeButton = "right-7 top-7 text-white">
      <div className='p-6 bg-secondary-300 rounded-lg'>
      
          
      <GoogleLoginButton/>
    </div>
      </DialogContent>
      </Dialog>}
    
    </>
  )
}

export default BuyNowButton;
