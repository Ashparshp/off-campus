import React, { useContext } from 'react'
import { Button } from '../ui/button'
import { useGoogleLogin } from '@react-oauth/google';
import { useLocation, useNavigate } from 'react-router-dom';
import { baseURL, googleAuth } from '@/utility/api';
import { MainContext } from '@/context/MainContext';

const GoogleLoginButton = () => {

  const navigate = useNavigate();
  const location = useLocation();  // Get the current page location
  const {isLoggedIn,setIsLoggedIn} = useContext(MainContext);
	const responseGoogle = async (authResult) => {
    console.log("in");
		try {
			if (authResult["code"]) {
				// const result = await googleAuth(authResult.code);
				// const {email, name, image} = result.data.user;
				// const token = result.data.token;
				// const obj = {email,name, token, image};
				// localStorage.setItem('user-info',JSON.stringify(obj));
        // setIsLoggedIn(true);
        // window.location.reload();
        console.log(authResult);
				
			} else {
				console.log(authResult);
				throw new Error(authResult);
			}
      
		} catch (e) {
			console.log('Error while Google Login...', e);
		}
	};

  // const googleLogin = useGoogleLogin({
  //   clientId:"907764506843-0oo08a2f1uq80iok4ml1jvji1pjglmc7.apps.googleusercontent.com",
	// 	onSuccess: (response) => console.log(response),
	// 	onError: (response) => console.log(response),
	// 	flow: "auth-code",
	// });

  const googleLogin = () => {
		window.open(
			`${baseURL}/auth/google`,
			"_self"
		);
	};

  return (
    <Button
    variant="outline"
    className="w-full bg-gray-900 text-white hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-900 "
    onClick={googleLogin}
  >
    <svg
      className="w-5 h-5 mr-2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
    Sign in with Google
  </Button>
  )
}

export default GoogleLoginButton