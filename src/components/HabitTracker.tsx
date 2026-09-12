import { useState } from 'react'

const habits = [
  { id: 1, name: 'الصلاة', emoji: '🕌', completed: true },
  { id: 2, name: 'الدراسة', emoji: '📚', completed: true },
  { id: 3, name: 'الرياضة', emoji: '🏃', completed: false },
  { id: 4, name: 'القراءة', emoji: '📖', completed: true },
  { id: 5, name: 'تعلم الإنجليزية', emoji: '🇬🇧', completed: false },
]

function HabitTracker() {
  const [habitList, setHabitList] = useState(habits)

  const toggleHabit = (id: number) => {
    setHabitList(
      habitList.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    )
  }

  return (
    <div className="space-y-3">
      {habitList.map((habit) => (
        <button
          key={habit.id}
          onClick={() => toggleHabit(habit.id)}
          className={`w-full p-4 rounded-lg text-right transition-all border-2 ${
            habit.completed
              ? 'bg-green-900 border-green-500 shadow-lg shadow-green-500/20'
              : 'bg-gray-800 border-gray-700 hover:border-gray-600'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl">{habit.emoji}</span>
            <span className="text-lg font-semibold text-white">{habit.name}</span>
            <div
              className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                habit.completed
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-500'
              }`}
            >
              {habit.completed && <span className="text-white text-sm">✓</span>}
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}

export default HabitTracker