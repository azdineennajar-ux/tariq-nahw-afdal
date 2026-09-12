import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Progress from './pages/Progress'
import Challenges from './pages/Challenges'
import Learning from './pages/Learning'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/learning" element={<Learning />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App