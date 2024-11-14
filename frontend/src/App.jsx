import { useContext, useEffect, useState } from 'react'
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
import Test from './pages/TestPage/Test'
import CourseDescPage from './pages/CourseDescriptionPage/CourseDescPage'
import PaymentPage from './pages/PaymentPage/PaymentPage'
import CallPage from './pages/CallPage/CallPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Footer from './components/Footer/Footer'
import { baseURL } from './utility/api'
import { MainContext } from './context/MainContext'
import axios from 'axios'


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const {user, setUser} = useContext(MainContext);

	const getUser = async () => {
		try {
			const url = `${baseURL}/login/success`;
			const response = await axios.get(url, { withCredentials: true });
			setUser(response.data.user);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

  const handleSubMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeSubMenu = () => {
    if (isOpen) setIsOpen(false)
  }

  return (
    <>
     
      <main  >
      
      <Navbar isOpen={isOpen} handleSubMenu={handleSubMenu} />
        <Routes>
          <Route path="/" element={<><HomePage /></>} />
          <Route path="*" element={<><ErrorPage /></>} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/courses/:slug" element={<CourseDescPage />} >
            
          </Route>
          <Route path="/courses/:slug/pay" element={<PaymentPage />} />
          <Route path="/bookcall" element={<CallPage />} />
          <Route path="/bookcall/pay" element={<PaymentPage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      <Footer/>
      
      </main>
    </>
  )
}

export default App
