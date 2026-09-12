const courses = [
  { id: 1, name: 'English 🇬🇧', progress: 65, lessons: 45 },
  { id: 2, name: 'البرمجة 💻', progress: 40, lessons: 30 },
  { id: 3, name: 'المنطق 🧠', progress: 55, lessons: 25 },
]

function Learning() {
  return (
    <div className="pb-24 pt-6 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">📚 التعلم</h1>
      
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-white">{course.name}</h2>
              <span className="text-sm text-gray-400">{course.lessons} درس</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">{course.progress}% مكتمل</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Learning