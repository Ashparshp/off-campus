import { createContext, useLayoutEffect, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);


  useLayoutEffect(() => {
    if(window.localStorage.getItem("user-info")){
      console.log(window.localStorage.getItem("user-info"));
      setIsLoggedIn(true);
      
    }
  },[])

  return (
    <MainContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      user,setUser
    }}>{children}</MainContext.Provider>
  );
}