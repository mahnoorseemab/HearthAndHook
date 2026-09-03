import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import OurStory from "./components/OurStory"
import Collection from "./components/Collection"

function App() {

  return (
    <div className="bg-(--color-bg)">
      <Navbar />
      <div className="pt-[13vh]">
        <Hero />
        <OurStory />
         <Collection />
      </div>
    </div>
  )
}

export default App
