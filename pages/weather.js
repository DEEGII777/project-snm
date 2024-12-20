export default function Home() {
    return (
    <div className="bg-blue-600 text-white min-h-screen flex justify-center items-center">
         {/* Weather */}
         <div className="bg-blue-500 text-ehite p-6 rounded-xl shadow-lg w-80">
        {/* Current Weather */}
        <div className="text-Counter">
            <p className="text-lg font-semibold">Thunder</p>
            <p className="text-5xl font-bold mt-2">29</p>
            <p className="text-sm mt-1">H:30  L:18</p>
        </div>

        {/* Weather Icon */}
        <div className="flex justify-center mt-6 relative">
            {/* Clouds */}
          <div className="absolute top-0 left-6 bg-gray-300 rounded-ful w-16 h-16"></div>
            <div className="absolute top-4 left-10 bg-gray-200 rounded-ful w-12 h-12"></div>
          {/* Raindrops */}
          <div className="absolute top-12 left-12">
            <div className="bg-blue-400 rounded-full w-2 h-4 mb-1"></div>
            <div className="bg-blue-400 rounded-full w-2 h-4 mb-1"></div>
          </div>
          {/* lightning */}
          <div className="absolute top-10 left-6 text-yellow-400">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 0 16 8 10 8 14 16 8 8 12 8" />
            </svg>
          </div>
        </div>

        {/* Weekly Forecast */}
        <div className="mt-8 grid grid-cols-4 gap-4 text-center">
        </div>
        <p className="text-sm font-medium">Mon</p>
        <svg className="mx-auto w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" className="text-yellow-400" />
        </svg>
         </div>
    </div>
    
    
    )
}