import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../firebase"
import { SparklesIcon } from "@heroicons/react/24/outline"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {

  const navigate = useNavigate();

  const handleGoogleSign = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("Successfully login: ", user)
      navigate("/");
    } catch (error) {
      console.error("Google sign-in error: ", error)
    }

  }

  return (
    <form className="min-h-screen flex items-center justify-center bg-gray-100 rounded-lg ">

      <div className="flex flex-col items-center space-y-4 p-10 border border-blue-500 rounded-xl">

        <Link to="/">
          <div className="text-4xl font-bold cursor-pointer text-blue-500 relative pl-3 mb-5">Socialy <SparklesIcon className="w-7 h-7 absolute left-33 top-0" /></div>
        </Link>
      
        <button onClick={handleGoogleSign} className="bg-gray-200 hover:bg-gray-300 w-2xs p-3 rounded-full shadow-md">Sign up with Google</button>
        <button className="bg-gray-200 hover:bg-gray-300 w-2xs p-3 rounded-full shadow-md">Sign up with Apple</button>
        
        
        <div className="flex items-center gap-2 mt-2">
          <div className="border-b border-gray-400 w-30" /> OR <div className="border-b border-gray-400 w-30" /> 
        </div>

        <h2 className="text-xl font-bold text-gray-500">Join us today</h2>

        <div className="flex flex-col gap-2 w-2xs">
          <input 
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded bg-gray-300 outline-blue-500"
          />

          <input 
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-300 outline-blue-500"
          />

          <input 
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-300 outline-blue-500"
          />

          <button className="bg-blue-600 hover:bg-blue-500 text-white w-2xs p-3 rounded-full shadow-md mt-2">Create an Account</button>
          
        </div>

        <div className="flex flex-col items-center">
          <h2>Already have an account?</h2>
          <Link to="/login">
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-100 w-2xs p-3 rounded-full mt-2">Sign In</button>
          </Link>
        </div>

      </div>


    </form>
  )
}
export default Register