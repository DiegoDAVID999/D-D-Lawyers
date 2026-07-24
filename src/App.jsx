import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Stats from "./components/Stats"
import Services from "./components/Services"
import Process from "./components/Process"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useReveal } from "./hooks/useReveal"

function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
