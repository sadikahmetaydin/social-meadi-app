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

            <Tweet 
              name="Sadik Ahmet Aydin"
              username="dev_sadik"
              avatar="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHdpdHRlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              content="The DesignLab is doing major work on Community-Driven Design, with several different variants. If you are working in this area, submit a paper to the DIS conference here in San Diego (see DesignLab posting below).... https://facebook.com/don.norman.18/..."
              time="2h"
            />

            <Tweet 
              name="Sadik Ahmet Aydin"
              username="dev_sadik"
              avatar="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHdpdHRlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              content="YC W14's @NooraHealth launched an NFT auction to save thousands of lives. Read why @paulg bid here: http://paulgraham.com/nft.html"
              time="2h"
            />

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