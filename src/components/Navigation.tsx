import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'الرئيسية', icon: '🏠' },
  { path: '/progress', label: 'التقدم', icon: '📊' },
  { path: '/challenges', label: 'التحديات', icon: '🎯' },
  { path: '/learning', label: 'التعلم', icon: '📚' },
]

function Navigation() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700">
      <div className="flex justify-around items-center h-20">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              location.pathname === item.path
                ? 'text-indigo-500 bg-gray-700'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation