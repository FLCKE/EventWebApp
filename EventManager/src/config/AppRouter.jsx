import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../screens/Dashboard'
import Login from '../screens/Login'
import Register from '../screens/Register'
import ClientList from '../screens/ClientList'
import EventList from '../screens/EventList'
import Profil from '../screens/Profil'
import AddEvent from '../screens/AddEvent'

function AppRouter() {
  return (
   <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route
            path="/dashboard"
            element={
                    <Dashboard />
                
            }
        />
        {/* <Route
            path="/dashboard-tenant"
            element={
                <ProtectedRoute allowedRoles={["locataire"]}>
                    <DashboardTenant />
                </ProtectedRoute>
            }
        />
        <Route
            path="/payement-tenant"
            element={
                <ProtectedRoute allowedRoles={["locataire", "proprietaire"]}>
                    <Rent />
                </ProtectedRoute>
            }
        />

        <Route
            path="/properties"
            element={
                <ProtectedRoute allowedRoles={["proprietaire"]}>
                    <Properties />
                </ProtectedRoute>
            }
        />

        <Route
            path="/leases"
            element={
                <ProtectedRoute allowedRoles={["proprietaire", "locataire"]}>
                    <Leases />
                </ProtectedRoute>
            }
        />
        <Route
            path="/profil"
            element={
                <ProtectedRoute allowedRoles={["proprietaire", "locataire"]}>
                    <Profil />
                </ProtectedRoute>
            }
        /> */}

        {/* <Route path="/reset-password/:token" element={<PasswordChanger />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/profil" element={<Profil />} />
        <Route path="/create-event" element={<AddEvent />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/clients" element={<ClientList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AppRouter