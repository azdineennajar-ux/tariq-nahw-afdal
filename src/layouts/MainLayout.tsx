import { Outlet, useLocation } from 'react-router-dom'
import Navigation from '@/components/Navigation'

function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <Outlet />
      <Navigation />
    </div>
  )
}

export default MainLayout