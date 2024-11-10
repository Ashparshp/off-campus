import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { MainContext, MainProvider } from './context/MainContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="907764506843-0oo08a2f1uq80iok4ml1jvji1pjglmc7.apps.googleusercontent.com">
      <MainProvider>
      <App />
      </MainProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
  
)
