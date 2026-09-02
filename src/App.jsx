import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import OurStory from "./components/OurStory"

function App() {

  return (
    <div className="bg-(--color-bg)">
      <Navbar />
      <div className="pt-[13vh]">
        <Hero />
        <OurStory />
      </div>
    </div>
  )
}

export default App
