import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import NumberCounter from './components/NumberCounter/NumberCounter'
import Products from './components/ProductsSection/Products'

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
      {/* Restrict overflow to horizontal only */}
      <main className='' onClick={closeSubMenu}>
        <Navbar isOpen={isOpen} handleSubMenu={handleSubMenu} />
        <Hero />
        <NumberCounter/>
        <Products/>
      </main>
    </>
  )
}

export default App
