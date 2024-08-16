import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/header/navbar.jsx'
function mainLayout() {
  return (
    <main>
     <div>
     <Navbar />
     </div>
     <div>
        <Outlet />
     </div>
    </main>
  )
}

export default mainLayout
