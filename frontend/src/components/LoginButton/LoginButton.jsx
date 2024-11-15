import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Dialog, DialogClose, DialogContent,DialogTrigger } from '../ui/dialog';
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import { MainContext } from '@/context/MainContext';
import { baseURL } from '@/utility/api';
import UserAvatar from '../UserAvatar/UserAvatar';
import { FaSignInAlt } from 'react-icons/fa';

const LoginButton = () => {

  const navigate = useNavigate();
  const location = useLocation();  // Get the current page location
  // const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('user-info') ? true : false);
  const {isLoggedIn,setIsLoggedIn,user} = useContext(MainContext);
  

  
  return (
    <>
    {user ? 
    // <button
    //   onClick={handleSignOut}  
    //   className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
    // >
    //   Log Out
    // </button>
      <UserAvatar image = {user.profile_picture}/>
    :
     <Dialog>
      <DialogTrigger>
      
<button
  class="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
>
  <div
    class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3 text-white"
  >
    <FaSignInAlt />
  </div>
  <div
    class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
  >
    Log In
  </div>
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