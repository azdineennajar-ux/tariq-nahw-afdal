import { useState } from 'react'
import HabitTracker from '@/components/HabitTracker'
import DailyStats from '@/components/DailyStats'
import LevelSystem from '@/components/LevelSystem'

function Home() {
  const [streak, setStreak] = useState(5)
  const [points, setPoints] = useState(1250)
  const [level, setLevel] = useState(1)

  return (
    <div className="pb-24 pt-6 px-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">طريق نحو أفضل</h1>
        <p className="text-gray-400">ابدأ رحلتك اليوم 🚀</p>
      </div>

      {/* Streak Counter */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 mb-6 text-center">
        <p className="text-gray-100 text-sm mb-2">السلسلة المتتالية</p>
        <p className="text-4xl font-bold text-white">🔥 {streak}</p>
        <p className="text-gray-100 text-xs mt-2">أيام متتالية</p>
      </div>

      {/* Level System */}
      <LevelSystem level={level} points={points} />

      {/* Daily Stats */}
      <DailyStats />

      {/* Habits */}
      <h2 className="text-xl font-bold text-white mb-4 mt-8">🎯 عاداتك اليوم</h2>
      <HabitTracker />
    </div>
  )
}

export default Home