import './App.css'
import HeroSection from './components/HeroSection'
import  Project  from './components/Project'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skill'

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
