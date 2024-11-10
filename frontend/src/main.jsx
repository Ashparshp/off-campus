import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { MainContext, MainProvider } from './context/MainContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <MainProvider>
      <App />
      </MainProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
  
)
