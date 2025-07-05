import { SparklesIcon, PlusCircleIcon, PhotoIcon, GifIcon, ChartBarIcon, FaceSmileIcon, CalendarIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function TweetBox() {
  return (
    <div className="p-3 m-3 mr-3 border border-gray-200 rounded-xl">
      <div className="flex space-x-4">
          <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHdpdHRlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" 
          alt="" className="w-12 h-12 rounded-full object-cover"/>

          <div className="flex-1">
            <textarea rows="3" placeholder="Share your idea..." className="w-full h-20 p-3 bg-gray-100 border-none outline-none placeholder-gray-400 rounded-md resize-none" />

            <div className="flex items-center gap-1">
              <GlobeAltIcon className="text-blue-500 w-4 h-4" /> <span className="text-blue-500 text-sm"> Everyone can reply</span>
            </div>

            <div className="flex items-center justify-between mt-3 border-t border-gray-200">

              <div className="flex items-center justify-between gap-2 mt-3">
                <PhotoIcon className="w-7 h-7 text-blue-500 cursor-pointer" />
                <GifIcon className="w-7 h-7 text-blue-500 cursor-pointer" />
                <ChartBarIcon className="w-7 h-7 text-blue-500 cursor-pointer" />
                <FaceSmileIcon className="w-7 h-7 text-blue-500 cursor-pointer" />
                <CalendarIcon className="w-7 h-7 text-blue-500 cursor-pointer" />
              </div>

              <div className="flex items-center justify-between gap-2 mt-3">
                <button className="hover:text-blue-600 mr-2 cursor-pointer">
                  <PlusCircleIcon className="w-7 h-7" />
                </button>

                <button className="bg-blue-600 hover:bg-blue-500 text-white p-3 px-10 rounded-full relative cursor-pointer">
                  Create a post <SparklesIcon className="w-5 h-5 absolute left-5 top-3" />
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
