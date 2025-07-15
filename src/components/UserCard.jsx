import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"

const UserCard = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [])

  if (!user) return null;

  const username = user.uid.slice(0, 6);

  return (
    <div className="flex justify-between items-center gap-2 mt-10">
      <div className="">
        <img src={user.photoURL} alt="" className="w-12 h-12 rounded-full object-cover"/>
      </div>

      <div className="">
        <h1 className="text-md">{user.displayName.slice(0, 11)}</h1>
        <h2 className="text-sm text-gray-500">@{username}</h2>
      </div>

      <div className="ml-6">
        <ArrowRightStartOnRectangleIcon className="w-6 h-6 text-red-400 hover:text-red-500" />
      </div>
    </div>
  )
}
export default UserCard