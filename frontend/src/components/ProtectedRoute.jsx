import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('adminToken')
  const user = localStorage.getItem('adminUser')

  // Check if token and user exist
  if (!token || !user) {
    return <Navigate to="/admin-login" replace />
  }

  try {
    const tokenPayload = JSON.parse(atob(token.split('.')[1]))
    const isExpired = tokenPayload.exp * 1000 < Date.now()

    if (isExpired) {
      localStorage.removeItem('adminToken')
      localStorage.removeItem('adminUser')
      return <Navigate to="/admin-login" replace />
    }
  } catch (error) {
    // If token parsing fails, redirect to login
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUser')
    return <Navigate to="/admin-login" replace />
  }

  return children
}

export default ProtectedRoute
