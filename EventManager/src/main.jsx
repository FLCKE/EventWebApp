import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./config/custom.scss"
import App from './App.jsx'
import AuthProvider from './auth/authProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>
  </StrictMode>
)
