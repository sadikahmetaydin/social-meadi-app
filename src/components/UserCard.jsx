import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const UserCard = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  // Get User Information on Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [])

  if (!user) return null;

  const username = user.uid.slice(0, 6);

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logout is successfully");
      navigate("/login")
    } catch (error) {
      console.log("Something went wrong!", error.message)
    }
  }

  return (
    <div className="flex justify-between items-center gap-2 mt-10">
      <div className="">
        <img src={user.photoURL} alt="" className="w-12 h-12 rounded-full object-cover"/>
      </div>

      <div className="">
        <h1 className="text-md">{user.displayName.slice(0, 11)}</h1>
        <h2 className="text-sm text-gray-500">@{username}</h2>
      </div>

      <button className="ml-6" onClick={handleLogout}>
        <ArrowRightStartOnRectangleIcon className="w-6 h-6 text-red-400 hover:text-red-500" />
      </button>
    </div>
  )
}
export default UserCard