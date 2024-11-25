// import React, { useContext } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Dialog, DialogClose, DialogContent,DialogTrigger } from '../ui/dialog';
// import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
// import { MainContext } from '@/context/MainContext';
// import { baseURL } from '@/utility/api';
// import UserAvatar from '../UserAvatar/UserAvatar';
// import { FaSignInAlt } from 'react-icons/fa';

// const LoginButton = () => {

//   const navigate = useNavigate();
//   const location = useLocation();  // Get the current page location
//   // const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('user-info') ? true : false);
//   const {isLoggedIn,setIsLoggedIn,user} = useContext(MainContext);
  

  
//   return (
//     <>
//     {user ? 
//     // <button
//     //   onClick={handleSignOut}  
//     //   className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
//     // >
//     //   Log Out
//     // </button>
//       <UserAvatar image = {user.profile_picture}/>
//     :
//      <Dialog>
//       <DialogTrigger>
      
// {/* <button
//   class="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
// >
//   <div
//     class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3 text-white"
//   >
//     <FaSignInAlt />
//   </div>
//   <div
//     class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
//   >
//     Log In
//   </div>
// </button> */}



//     <button
//       class=" inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
//     >
//       <span
//         class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//       ></span>

//       <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
//         <div class="relative z-10 flex items-center space-x-2">
//           <span class="transition-all duration-500 group-hover:translate-x-1"
//             >Login</span
//           >
//           <svg
//             class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
//             data-slot="icon"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               clip-rule="evenodd"
//               d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
//               fill-rule="evenodd"
//             ></path>
//           </svg>
//         </div>
//       </span>
//     </button>
  


//       </DialogTrigger>
      
//       <DialogContent className = "border-none bg-inherit" closeButton = "right-7 top-7 text-white">
//       <div className='p-6 bg-secondary-300 rounded-lg'>
      
//       <GoogleLoginButton/>
//     </div>
//       </DialogContent>
//       </Dialog>}
    
//     </>
//   )
// }

// export default LoginButton


import React, { useContext } from 'react';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog';
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import { MainContext } from '@/context/MainContext';
import UserAvatar from '../UserAvatar/UserAvatar';

const LoginButton = () => {
  const { user } = useContext(MainContext);

  return (
    <>
      {user ? (
        <UserAvatar image={user.profile_picture} />
      ) : (
        <Dialog>
          <DialogTrigger>
            <button className="flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-gray-900 border border-gray-700 rounded-full transition-all hover:bg-gray-800 hover:shadow-lg">
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </DialogTrigger>
          <DialogContent className="border-none bg-inherit">
            <div className="p-6 bg-secondary-300 rounded-lg">
              <GoogleLoginButton />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default LoginButton;
