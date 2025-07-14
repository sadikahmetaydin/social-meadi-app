import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Tweet from "../components/Tweet"
import TweetBox from "../components/TweetBox"
import Widgets from "../components/Widgets"

const Home = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />

        <div className="flex max-w-screen-xl mx-auto">

          <div className="hidden md:block w-64">
            <Sidebar />
          </div>


          <div className="flex-1">
            <TweetBox />

            <Tweet />
          </div>

          <div className="hidden xl:block w-90">
            <Widgets />
          </div>

        </div>
      </div>
    </div>
  )
}
export default Home