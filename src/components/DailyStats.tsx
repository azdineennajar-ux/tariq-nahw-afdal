function DailyStats() {
  const completedToday = 4
  const totalHabits = 5
  const percentage = (completedToday / totalHabits) * 100

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h2 className="text-lg font-bold text-white mb-4">📊 نسبة الإنجاز اليوم</h2>
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl font-bold text-indigo-500">{percentage.toFixed(0)}%</span>
        <div className="text-right">
          <p className="text-gray-400 text-sm">{completedToday} من {totalHabits}</p>
          <p className="text-gray-500 text-xs">عادات مكتملة</p>
        </div>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default DailyStats