import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { HomeIcon, BellIcon, UserIcon, MagnifyingGlassIcon, SparklesIcon  } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);


  return (
    <div className="border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left */}
          <div className="text-2xl font-bold cursor-pointer text-blue-500 relative pl-3">Socialy <SparklesIcon className="w-5 h-5 absolute left-23 top-1" /></div>

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
            
            {/* Update Photo with Firebase */}
            {
              user ? (
                <img src={user.photoURL } alt="Profile" className="w-8 h-8 rounded-full object-cover cursor-pointer" />
              ) : (
                <Link to="/auth"><UserIcon className="w-6 cursor-pointer hover:text-blue-500" /></Link>
              )
            }

          </div>
      </div>
    </div>
  )
}
export default Navbar