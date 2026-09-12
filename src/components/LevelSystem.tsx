const levels = [
  { level: 1, name: 'البداية', emoji: '🌱', minPoints: 0, maxPoints: 500 },
  { level: 2, name: 'الانضباط', emoji: '⚡', minPoints: 500, maxPoints: 1500 },
  { level: 3, name: 'القوة', emoji: '🛡️', minPoints: 1500, maxPoints: 3000 },
  { level: 4, name: 'الإنجاز', emoji: '🏆', minPoints: 3000, maxPoints: 5000 },
]

interface LevelSystemProps {
  level: number
  points: number
}

function LevelSystem({ level, points }: LevelSystemProps) {
  const currentLevel = levels[level - 1]
  const nextLevel = levels[level]
  const currentPoints = points - currentLevel.minPoints
  const pointsToNext = (nextLevel?.minPoints || currentLevel.maxPoints) - currentLevel.minPoints
  const progressPercent = (currentPoints / pointsToNext) * 100

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-400 text-sm mb-1">🏆 المستوى الحالي</p>
          <div className="flex items-center gap-2">
            <span className="text-3xl">{currentLevel?.emoji}</span>
            <h2 className="text-2xl font-bold text-white">{currentLevel?.name}</h2>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-sm">النقاط</p>
          <p className="text-2xl font-bold text-indigo-500">{points}</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs text-gray-400">
          {currentPoints} / {pointsToNext}
        </p>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {nextLevel && (
        <p className="text-xs text-gray-400 mt-3 text-center">
          المستوى التالي: {nextLevel.emoji} {nextLevel.name}
        </p>
      )}
    </div>
  )
}

export default LevelSystem