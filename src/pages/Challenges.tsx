const challenges = [
  { id: 1, name: 'تحدي 7 أيام', days: 7, completed: 5, emoji: '⚡' },
  { id: 2, name: 'تحدي 30 يوم', days: 30, completed: 15, emoji: '🛡️' },
  { id: 3, name: 'تحدي تعلم الإنجليزية', days: 60, completed: 20, emoji: '🇬🇧' },
  { id: 4, name: 'تحدي الرياضة', days: 90, completed: 45, emoji: '💪' },
]

function Challenges() {
  return (
    <div className="pb-24 pt-6 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">🎯 التحديات</h1>
      
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-gray-800 rounded-lg p-4 border-l-4 border-indigo-500">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-white">{challenge.emoji} {challenge.name}</h2>
              <span className="text-xs bg-indigo-500 text-white px-3 py-1 rounded-full">
                {challenge.completed}/{challenge.days}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all"
                style={{ width: `${(challenge.completed / challenge.days) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Challenges