import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../screens/Dashboard'
import Login from '../screens/Login'
import Register from '../screens/Register'
import ClientList from '../screens/ClientList'
import EventList from '../screens/EventList'
import Profil from '../screens/Profil'
import AddEvent from '../screens/AddEvent'
import ProtectedRoutes from "../auth/ProtectedRoutes"
import Landing from '../screens/Landing'
function AppRouter() {
  return (
   <Routes>
        <Route path="/" element={<Landing />} />

        <Route
            path="/dashboard"
            element={
                    <Dashboard />
                
            }
        />
        {/* <Route
            path="/dashboard-tenant"
            element={
                <ProtectedRoutes allowedRoles={["locataire"]}>
                    <DashboardTenant />
                </ProtectedRoutes>
            }
        />
        <Route
            path="/payement-tenant"
            element={
                <ProtectedRoutes allowedRoles={["locataire", "proprietaire"]}>
                    <Rent />
                </ProtectedRoutes>
            }
        />

        <Route
            path="/properties"
            element={
                <ProtectedRoutes allowedRoles={["proprietaire"]}>
                    <Properties />
                </ProtectedRoutes>
            }
        />

        <Route
            path="/leases"
            element={
                <ProtectedRoutes allowedRoles={["proprietaire", "locataire"]}>
                    <Leases />
                </ProtectedRoutes>
            }
        />
        <Route
            path="/profil"
            element={
                <ProtectedRoutes allowedRoles={["proprietaire", "locataire"]}>
                    <Profil />
                </ProtectedRoutes>
            }
        /> */}

        {/* <Route path="/reset-password/:token" element={<PasswordChanger />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/profil" element={<ProtectedRoutes allowedRoles={["organizer"]}><Profil /></ProtectedRoutes>} />
        <Route path="/create-event" element={<ProtectedRoutes allowedRoles={["organizer"]}><AddEvent /></ProtectedRoutes>} />
        <Route path="/edit-event/:id" element={<ProtectedRoutes allowedRoles={["organizer"]}><AddEvent  /></ProtectedRoutes>} />
        <Route path="/events" element={<ProtectedRoutes allowedRoles={["organizer"]}><EventList /></ProtectedRoutes>} />
        <Route path="/clients" element={<ProtectedRoutes allowedRoles={["organizer"]}><ClientList /></ProtectedRoutes>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AppRouter