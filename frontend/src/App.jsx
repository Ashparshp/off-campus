import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import NumberCounter from './components/NumberCounter/NumberCounter'

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
      <main className='overflow-x-hidden' onClick={closeSubMenu}>
        <Navbar isOpen={isOpen} handleSubMenu={handleSubMenu} />
        <Hero />
        <NumberCounter/>
      </main>
    </>
  )
}

export default App
