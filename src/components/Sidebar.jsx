import { HomeIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, UserIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col items-start p-4 space-y-4 w-64 h-screen border-r border-gray-200 fixed ml-42">
      {/* Menu Elements */}
      <button className="flex items-center space-x-3 hover:text-blue-500 p-2 rounded-full w-full cursor-pointer transition-all ease-in">
        <HomeIcon className="w-6 h-6"/>
        <span>Home</span>
      </button>

      <button className="flex items-center space-x-3 hover:text-blue-500 p-2 rounded-full w-full cursor-pointer transition-all ease-in">
        <HashtagIcon className="w-6 h-6" />
        <span>Explore</span>
      </button>

      <button className="flex items-center space-x-3 hover:text-blue-500 p-2 rounded-full w-full cursor-pointer transition-all ease-in">
        <BellIcon className="w-6 h-6" />
        <span>Notifications</span>
      </button>

      <button className="flex items-center space-x-3 hover:text-blue-500 p-2 rounded-full w-full cursor-pointer transition-all ease-in">
        <InboxIcon className="w-6 h-6" />
        <span>Messages</span>
      </button>

      <button className="flex items-center space-x-3 hover:text-blue-500 p-2 rounded-full w-full cursor-pointer transition-all ease-in">
        <BookmarkIcon className="w-6 h-6" />
        <span>Bookmarks</span>
      </button>

      <button className="flex items-center space-x-3 hover:text-blue-500 p-2 rounded-full w-full cursor-pointer transition-all ease-in">
        <UserIcon className="w-6 h-6" />
        <span>Profile</span>
      </button>

      <button className="flex items-center space-x-3 hover:text-blue-500 p-2 rounded-full w-full cursor-pointer transition-all ease-in">
        <EllipsisHorizontalCircleIcon className="w-6 h-6" />
        <span>More</span>
      </button>
    </div>
  )
}

export default Sidebar