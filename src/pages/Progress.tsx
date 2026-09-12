function Progress() {
  return (
    <div className="pb-24 pt-6 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">📊 تقدمك</h1>
      
      <div className="bg-gray-800 rounded-lg p-6 mb-4">
        <h2 className="text-lg font-bold text-white mb-4">الإحصائيات</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">أيام الالتزام</span>
            <span className="text-2xl font-bold text-indigo-500">45</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">عادات مكتملة</span>
            <span className="text-2xl font-bold text-green-500">342</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">نسبة الإنجاز</span>
            <span className="text-2xl font-bold text-blue-500">94%</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-lg font-bold text-white mb-4">التطور الأسبوعي</h2>
        <div className="h-40 bg-gray-700 rounded flex items-center justify-center text-gray-400">
          الرسم البياني قريباً 📈
        </div>
      </div>
    </div>
  )
}

export default Progress