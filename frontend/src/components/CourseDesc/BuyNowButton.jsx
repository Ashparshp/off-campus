import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const BuyNowButton = () => {
  const navigate = useNavigate();
  const location = useLocation();  // Get the current page location

  const handleNavigation = () => {
    const currentPath = location.pathname;  // Get the current URL path
    navigate(`${currentPath}/pay`);  // Append `/pay` to the current URL
  }

  return (
    <button
      onClick={handleNavigation}  // Remove the parentheses here
      className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
    >
      BUY NOW
    </button>
  )
}

export default BuyNowButton;
