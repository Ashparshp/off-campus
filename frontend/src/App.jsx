import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main className='overflow-x-hidden'>
      <Navbar />
     </main>
    </>
  )
}

export default App
