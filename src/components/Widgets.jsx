import { XMarkIcon } from "@heroicons/react/24/outline"

const Widgets = () => {
  return (
    <div className="hidden xl:block p-4 space-y-4 sticky top-[6px] h-fit">
      {/* What's Trending Section */}
      <div className="bg-gray-100 p-4 rounded-xl space-y-2">
        <h2 className="text-xl font-bold">What's Trending</h2>

        <div className="border-b border-gray-200"></div>

        <div className="text-sm text-gray-400 font-bold">Trending in Turkiye</div>
        <div className="text-sm text-gray-500 font-semibold">#tailwindcss</div>
        <div className="text-sm text-gray-500 font-semibold mb-3">#boostrap</div>

        <div className="border-b border-gray-200"></div>

        <div className="text-sm text-gray-400 font-bold">Frontend Community</div>
        <div className="text-sm text-gray-500 font-semibold">#FrontendDeveloper</div>
        <div className="text-sm text-gray-500 font-semibold">#ReactDeveloper</div>

        <div className="border-b border-gray-200"></div>

        <div className="text-sm text-gray-400 font-bold">Currently Popular</div>
        <div className="text-sm text-gray-500 font-semibold">#Zontes250TE</div>

        <div className="border-b border-gray-200"></div>

        <h2 className="text-blue-500 text-sm fond-bold cursor-pointer">Show more</h2>
      </div>

      {/* Who to follow Section */}
      <div className="bg-gray-100 p-4 rounded-xl space-y-4">
        <h2 className="text-xl font-bold">Who to Follow</h2>

        <div className="border-b border-gray-200"></div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHdpdHRlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" 
              alt="" className="w-12 h-12 rounded-full object-cover mr-2"/>
            
            <div>
              <h2 className="text-sm">sadikAydin</h2>
              <h2 className="text-xs text-bold text-gray-500">@dev_sadik</h2>
            </div>
          </div>

          <button className="border border-blue-500 p-2 text-sm text-blue-500 rounded-full cursor-pointer">Follow</button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHdpdHRlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" 
              alt="" className="w-12 h-12 rounded-full object-cover mr-2"/>
            
            <div>
              <h2 className="text-sm">Elon Musk</h2>
              <h2 className="text-xs text-bold text-gray-500">@elonmusk</h2>
            </div>
          </div>

          <button className="border border-blue-500 p-2 text-sm text-blue-500 rounded-full cursor-pointer">Follow</button>
        </div>
      </div>

      {/* Topics to follow Section */}
      <div className="bg-gray-100 p-4 rounded-xl space-y-4">
        <h2 className="text-xl font-bold">Topics to follow</h2>

        <div className="border-b border-gray-200"></div>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-sm font-bold">UX Design</h1>
            <p className="text-xm text-gray-500">Computer Programing</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="border border-blue-500 p-2 text-sm text-blue-500 rounded-full cursor-pointer">Follow</button>
            <XMarkIcon className="w-5 h-5 font-bold" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-sm font-bold">Technologiy</h1>
            <p className="text-xm text-gray-500">All about technologiy</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="border border-blue-500 p-2 text-sm text-blue-500 rounded-full cursor-pointer">Follow</button>
            <XMarkIcon className="w-5 h-5 font-bold" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-sm font-bold">Javascript</h1>
            <p className="text-xm text-gray-500">Programing language</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="border border-blue-500 p-2 text-sm text-blue-500 rounded-full cursor-pointer">Follow</button>
            <XMarkIcon className="w-5 h-5 font-bold" />
          </div>
        </div>

        <div className="border-b border-gray-200"></div>

        <h2 className="text-blue-500 text-sm fond-bold cursor-pointer">Show more</h2>
      </div>
    </div>
  )
}
export default Widgets