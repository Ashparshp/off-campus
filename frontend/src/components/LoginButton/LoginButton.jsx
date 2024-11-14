import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Dialog, DialogClose, DialogContent,DialogTrigger } from '../ui/dialog';
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import { MainContext } from '@/context/MainContext';
import { baseURL } from '@/utility/api';

const LoginButton = () => {

  const navigate = useNavigate();
  const location = useLocation();  // Get the current page location
  // const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('user-info') ? true : false);
  const {isLoggedIn,setIsLoggedIn,user} = useContext(MainContext);
  

  const handleSignOut = () => {
    window.open(`${baseURL}/logout`,"_self")
  }
  return (
    <>
    {user ? <button
      onClick={handleSignOut}  
      className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
    >
      Log Out
    </button>
    :
     <Dialog>
      <DialogTrigger>
      <button
      
      className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
    >
      Sign In
    </button>
      </DialogTrigger>
      
      <DialogContent className = "border-none bg-inherit" closeButton = "right-7 top-7 text-white">
      <div className='p-6 bg-secondary-300 rounded-lg'>
      <div className="flex items-center justify-center mb-4">
          <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
            <span className="text-lg font-bold">OC</span>
          </div>
          <h2 className="text-white text-2xl font-bold">OFF CAMPUS</h2>
        </div>
      <GoogleLoginButton/>
    </div>
      </DialogContent>
      </Dialog>}
    
    </>
  )
}

export default LoginButton