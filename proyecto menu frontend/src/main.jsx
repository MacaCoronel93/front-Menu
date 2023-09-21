import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { browserRouter } from '@/routes/routeProvider.jsx'
import { AuthProvider } from './context/authContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider> 
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
  </AuthProvider> 
)
