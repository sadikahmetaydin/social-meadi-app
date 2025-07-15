import { deleteDoc, doc } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"
import { db } from "../firebase"
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { useEffect, useState } from "react"
import { ChatBubbleLeftEllipsisIcon, ArrowPathIcon, HandThumbUpIcon, ShareIcon, XCircleIcon } from "@heroicons/react/24/outline"

const Tweet = () => {

  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);

  // Get Tweet Firestore
  useEffect(() => {
    const q = query(collection(db, "tweets"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id, ...doc.data()
      }));
      setTweets(data);
    });

    return () => unsubscribe();
  }, []);

  // Delete Tweet
  const handleDelelete = async (id) => {
    try {
      await deleteDoc(doc(db, "tweets", id));
      console.log("Tweet deleted successfully.");
    } catch (error) {
      console.log("Something went wrong!", error.message);
    }
  }

  // Delete Tweet if User Correct
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [])

  return (
    <div className="space-y-4 mt-4">
      {
        tweets.map((tweet) => {
          const { photoURL, displayName, createdAt, text, uid } = tweet;
          const time = createdAt?.toDate().toLocaleString();
          const username = uid?.slice(0, 6);
    
          return (
            <div key={tweet.id} className="border-b border-gray-200 p-4 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-start space-x-4">
    
                <img src={photoURL } alt="Profile" className="w-12 h-12 rounded-full object-cover cursor-pointer" />
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-bold">{displayName}</span>
                      <span className="text-gray-400 cursor-pointer ml-1 text-sm">@{username} . {time}</span>
                    </div>
                    
                    {/* If user correct deleting tweet */}
                    {user?.uid === uid && (
                      <div onClick={() => handleDelelete(tweet.id)} className="text-red-400 cursor-pointer hover:text-red-500"><XCircleIcon className="w-5 h-5" /></div>
                    )}

                  </div>
                  
                  <p className="text-gray-600 mt-2 text-sm">{text}</p>
    
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
        })
      }
    </div>
  )
}
export default Tweet