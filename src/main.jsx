import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'flowbite'
import Login from './login.jsx'
import Carrusel from './Carrucel.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Carrusel/>
    <Login/>
  </StrictMode>,
)
