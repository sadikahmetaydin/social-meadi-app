import { ChatBubbleLeftEllipsisIcon, ArrowPathIcon, HandThumbUpIcon, ShareIcon } from "@heroicons/react/24/outline"

const Tweet = ({name, username, avatar, content, time}) => {
  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-100 transition-colors duration-200">
      <div className="flex items-start space-x-4">

        <img src={avatar} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-bold">{name}</span>
              <span className="text-gray-400 cursor-pointer ml-1 text-sm">@{username} . {time}</span>
            </div>
            <div className="text-gray-400 cursor-pointer hover:text-gray-600">•••</div>
          </div>
          
          <p className="text-gray-600 mt-2 text-sm">{content}</p>

          <div className="flex justify-between mt-5 text-gray-400 text-md">
            <button className="hover:text-blue-400 transition-all ease-in"><ChatBubbleLeftEllipsisIcon className="w-6 h-6" /></button>
            <button className="hover:text-blue-400 transition-all ease-in"><ArrowPathIcon className="w-6 h-6" /></button>
            <button className="hover:text-blue-400 transition-all ease-in"><HandThumbUpIcon className="w-6 h-6" /></button>
            <button className="hover:text-blue-400 transition-all ease-in"><ShareIcon className="w-6 h-6" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tweet