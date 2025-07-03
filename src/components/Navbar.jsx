import { HomeIcon, BellIcon, UserIcon, MagnifyingGlassIcon, SparklesIcon  } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-3 border-b border-gray-200">
          {/* Left */}
          <div className="text-2xl font-bold cursor-pointer text-blue-500 relative">Socialy <SparklesIcon className="w-5 h-5 absolute left-21 top-1" /></div>

          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <input type="text" placeholder="Search Socialy" 
              className="bg-gray-200 text-gray-600 placeholder-gray-600 rounded-full pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[350px] h-[44px]" />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-600 absolute left-3 top-3.5" />
            </div>
          </div>

          {/* Right */}
          <div className="flex space-x-6">
            <HomeIcon className="w-6 cursor-pointer hover:text-blue-500" />
            <BellIcon className="w-6 cursor-pointer hover:text-blue-500" />
            <UserIcon className="w-6 cursor-pointer hover:text-blue-500" />
          </div>
      </div>
  )
}
export default Navbar