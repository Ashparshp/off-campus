import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import NumberCounter from './components/NumberCounter/NumberCounter'

import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import Course from './pages/CoursesPage/CoursePage'


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeSubMenu = () => {
    if (isOpen) setIsOpen(false)
  }

  return (
    <>
     
      <main  onClick={closeSubMenu}>
        <Navbar isOpen={isOpen} handleSubMenu={handleSubMenu} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/courses" element={<Course />} />
        </Routes>
      
      </main>
    </>
  )
}

export default App
