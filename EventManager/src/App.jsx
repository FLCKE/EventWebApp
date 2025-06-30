import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './screens/Login'
import Register from './screens/Register'
import Dashboard from './screens/Dashboard'
import AddEvent from './screens/AddEvent'
import EventList from './screens/EventList'
import ClientList from './screens/ClientList'
import Profil from './screens/Profil'
import NavBarApp from './components/NavBarApp'
import AppRouter from './config/AppRouter'
import { BrowserRouter as Router  } from 'react-router-dom'

function App() {

  return (
      <AppRouter />
   
  )
}

export default App
